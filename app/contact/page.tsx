import type { Metadata } from "next"
import { Suspense } from "react"
import { ContactForm } from "@/components/contact/contact-form"
import { PageHero } from "@/components/shared/page-hero"
import { site } from "@/data/site"
import { whatsappHref } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with CODE & CO. Email Furqan Amir, send a note, or message on WhatsApp.",
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const { type } = await searchParams
  return (
    <>
      <PageHero title="Tell us what you need.">
        A name, the kind of site, and a sentence about the job. We reply within a day.
      </PageHero>
      <section className="bg-ivory py-16 text-black sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Suspense fallback={<p className="text-black/60">Loading the form…</p>}>
            <ContactForm initialType={type} />
          </Suspense>
          <aside className="space-y-6">
            <div className="rounded-3xl bg-black p-6 text-ivory">
              <h2 className="font-display text-2xl">Direct</h2>
              <ul className="mt-4 space-y-3 text-sm text-grey">
                <li>
                  <a className="text-ivory underline decoration-maroon" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <a className="text-ivory underline decoration-maroon" href={`tel:${site.phoneTel}`}>
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    className="text-ivory underline decoration-maroon"
                    href={whatsappHref(site.whatsappDigits, "Hello CODE & CO.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-grey">
                Messages are read every day. Expect a reply within a day.
              </p>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-6">
              <h2 className="font-display text-2xl">Studio</h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70">
                {site.location}. Clients in other cities are normal — the site does not need us in
                the room.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
