"use client"

import { useState, type ReactNode } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { budgetRanges, site, timelines, websiteTypes } from "@/data/site"
import { whatsappHref } from "@/lib/utils"

const schema = z.object({
  name: z.string().trim().min(2, "Tell us your name."),
  email: z.string().trim().email("Use an email address we can reply to."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  websiteType: z.string().min(1, "Choose a website type."),
  budget: z.string().min(1, "Choose a budget range."),
  timeline: z.string().min(1, "Choose a timeline."),
  message: z.string().trim().min(12, "A sentence or two is enough."),
  company: z.string().optional(),
})

type FormValues = z.infer<typeof schema>
type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; via: "email" | "mailto"; mailto?: string }
  | { state: "error"; message: string }

const fieldClass =
  "h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-base text-black outline-none focus-visible:border-maroon focus-visible:ring-3 focus-visible:ring-maroon/25"

export function ContactForm({ initialType }: { initialType?: string }) {
  const known = websiteTypes.some((item) => item.value === initialType)
  const [status, setStatus] = useState<Status>({ state: "idle" })
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      websiteType: known ? initialType : "",
      budget: "",
      timeline: "",
      message: "",
      company: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setStatus({ state: "sending" })
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = (await response.json()) as {
        ok?: boolean
        error?: string
        delivered?: boolean
        mailto?: string
      }
      if (!response.ok || !data.ok) {
        setStatus({
          state: "error",
          message: data.error || "The note did not send. Try again, or email us directly.",
        })
        return
      }
      if (data.mailto) {
        const link = document.createElement("a")
        link.href = data.mailto
        link.rel = "noreferrer"
        document.body.appendChild(link)
        link.click()
        link.remove()
        setStatus({ state: "sent", via: "mailto", mailto: data.mailto })
        return
      }
      setStatus({ state: "sent", via: "email" })
      form.reset()
    } catch {
      setStatus({
        state: "error",
        message: "The note did not send. Check your connection and try again.",
      })
    }
  }

  if (status.state === "sent" && status.via === "email") {
    return (
      <div className="rounded-3xl border border-maroon/30 bg-white p-8" role="status">
        <h2 className="font-display text-3xl text-black">Thanks. We&apos;ll reply within a day.</h2>
        <p className="mt-3 text-black/70">Your note is with {site.email}.</p>
        <Button type="button" className="mt-6" size="lg" onClick={() => setStatus({ state: "idle" })}>
          Send another
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-5" noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...form.register("company")} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={form.formState.errors.name?.message} htmlFor="name">
          <Input id="name" autoComplete="name" {...form.register("name")} />
        </Field>
        <Field label="Email" error={form.formState.errors.email?.message} htmlFor="email">
          <Input id="email" type="email" autoComplete="email" {...form.register("email")} />
        </Field>
      </div>
      <Field label="Phone" hint="Optional" error={form.formState.errors.phone?.message} htmlFor="phone">
        <Input id="phone" type="tel" autoComplete="tel" {...form.register("phone")} />
      </Field>
      <Field label="Website type" error={form.formState.errors.websiteType?.message} htmlFor="websiteType">
        <select id="websiteType" className={fieldClass} {...form.register("websiteType")}>
          <option value="">Choose one</option>
          {websiteTypes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Budget" error={form.formState.errors.budget?.message} htmlFor="budget">
          <select id="budget" className={fieldClass} {...form.register("budget")}>
            <option value="">Choose one</option>
            {budgetRanges.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Timeline" error={form.formState.errors.timeline?.message} htmlFor="timeline">
          <select id="timeline" className={fieldClass} {...form.register("timeline")}>
            <option value="">Choose one</option>
            {timelines.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Message" error={form.formState.errors.message?.message} htmlFor="message">
        <Textarea id="message" {...form.register("message")} placeholder="What should the site do?" />
      </Field>
      {status.state === "error" ? (
        <p className="rounded-xl border border-maroon/40 bg-maroon/10 px-4 py-3 text-sm text-maroon-deep" role="alert">
          {status.message}
        </p>
      ) : null}
      {status.state === "sent" && status.via === "mailto" ? (
        <p className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black" role="status">
          Your email app should open with this note addressed to {site.email}. Send it from there and
          we will reply within a day. If nothing opened,{" "}
          <a className="font-medium text-maroon no-underline" href={status.mailto}>
            try the email link again
          </a>
          .
        </p>
      ) : null}
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status.state === "sending"}>
          {status.state === "sending" ? (
            <>
              <LoaderCircle className="size-4 motion-safe:animate-spin" />
              Sending
            </>
          ) : (
            "Send the note"
          )}
        </Button>
        <a
          href={whatsappHref(site.whatsappDigits, "Hello CODE & CO. I would rather chat about a project.")}
          target="_blank"
          rel="noreferrer"
          className="text-base font-medium text-black no-underline hover:text-maroon"
        >
          Prefer chat? WhatsApp
        </a>
      </div>
    </form>
  )
}

function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
}: {
  label: string
  hint?: string
  error?: string
  htmlFor: string
  children: ReactNode
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <Label htmlFor={htmlFor}>{label}</Label>
        {hint ? <span className="text-xs text-black/50">{hint}</span> : null}
      </div>
      {children}
      {error ? <p className="text-sm text-maroon">{error}</p> : null}
    </div>
  )
}
