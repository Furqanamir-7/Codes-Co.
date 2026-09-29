import type { Metadata } from "next"
import { Suspense } from "react"
import { ContactForm } from "@/components/contact/contact-form"
import { PageHero } from "@/components/shared/page-hero"
import { site } from "@/data/site"
import { whatsappHref } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with CODE & CO. Email the studio, call, or message on WhatsApp.",
}

const emailLabels = ["Studio email", "Email"] as const

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const { type } = await searchParams
  const channels = [
    ...site.emails.map((address, index) => ({
      label: emailLabels[index] ?? "Email",
      value: address,
      href: `mailto:${address}`,
      external: false,
      span: "sm:col-span-1 lg:col-span-3",
    })),
    {
      label: "Phone",
      value: site.phoneDisplay,
      href: `tel:${site.phoneTel}`,
      external: false,
      span: "lg:col-span-2",
    },
    {
      label: "WhatsApp",
      value: site.phoneDisplay,
      href: whatsappHref(site.whatsappDigits, "Hello CODE & CO."),
      external: true,
      span: "lg:col-span-2",
    },
    {
      label: "Instagram",
      value: "codesandco.studio",
      href: site.instagram,
      external: true,
      span: "lg:col-span-2",
    },
  ]

  return (
    <>
      <PageHero title="Tell us what you need.">
        Write, call, or send a note. Messages are read every day, and we reply within a day.
      </PageHero>
      <section className="bg-black pb-16">
        <div className="mx-auto grid w-full max-w-6xl gap-3 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-6">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noreferrer" : undefined}
              className={`group block rounded-3xl border border-maroon bg-maroon-tint p-5 no-underline transition hover:-translate-y-0.5 hover:bg-maroon-deep sm:p-6 ${channel.span}`}
            >
              <span className="block text-xs tracking-[0.16em] text-grey uppercase">{channel.label}</span>
              <span className="mt-3 block font-display text-xl leading-tight break-all text-ivory transition group-hover:text-white sm:text-2xl">
                {channel.value}
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="bg-ivory py-16 text-black sm:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-4xl leading-none">Send a note</h2>
          <p className="mt-4 max-w-prose text-lg text-black/70">
            A name, the kind of site, and a sentence about the job is enough to start.
          </p>
          <div className="mt-10">
            <Suspense fallback={<p className="text-black/60">Loading the form…</p>}>
              <ContactForm initialType={type} />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
