import { z } from "zod"
import { budgetRanges, site, timelines, websiteTypes } from "@/data/site"

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  websiteType: z.string().min(1),
  budget: z.string().min(1),
  timeline: z.string().min(1),
  message: z.string().trim().min(12).max(4000),
  company: z.string().optional(),
})

function label(list: readonly { value: string; label: string }[], value: string) {
  return list.find((item) => item.value === value)?.label ?? value
}

function mailtoFor(data: z.infer<typeof schema>) {
  const subject = `Project inquiry from ${data.name}`
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Website: ${label(websiteTypes, data.websiteType)}`,
    `Budget: ${label(budgetRanges, data.budget)}`,
    `Timeline: ${label(timelines, data.timeline)}`,
    "",
    data.message,
  ].join("\n")
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export async function POST(request: Request) {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return Response.json({ ok: false, error: "The form could not be read." }, { status: 400 })
  }

  const parsed = schema.safeParse(json)
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Check the form and try again." },
      { status: 400 },
    )
  }

  if (parsed.data.company) {
    return Response.json({ ok: true, delivered: true })
  }

  const key = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || site.email
  if (key) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "CODE & CO. <onboarding@resend.dev>",
          to: [to],
          reply_to: parsed.data.email,
          subject: `Project inquiry from ${parsed.data.name}`,
          text: [
            `Name: ${parsed.data.name}`,
            `Email: ${parsed.data.email}`,
            `Phone: ${parsed.data.phone || "—"}`,
            `Website: ${label(websiteTypes, parsed.data.websiteType)}`,
            `Budget: ${label(budgetRanges, parsed.data.budget)}`,
            `Timeline: ${label(timelines, parsed.data.timeline)}`,
            "",
            parsed.data.message,
          ].join("\n"),
        }),
      })
      if (response.ok) {
        return Response.json({ ok: true, delivered: true })
      }
    } catch {
      // Fall through to the mailto path so the visitor is not stuck.
    }
  }

  return Response.json({ ok: true, delivered: false, mailto: mailtoFor(parsed.data) })
}
