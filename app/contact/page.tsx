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
          <aside>
            <div className="rounded-3xl bg-black p-7 text-ivory sm:p-8">
              <h2 className="font-display text-3xl">Direct</h2>
              <p className="mt-3 text-sm leading-relaxed text-grey">
                Messages are read every day. Expect a reply within a day.
              </p>
              <ul className="mt-8 divide-y divide-ivory/10">
                {site.emails.map((address) => (
                  <li key={address}>
                    <a href={`mailto:${address}`} className="group block py-5 no-underline">
                      <span className="block text-xs tracking-[0.16em] text-grey uppercase">Email</span>
                      <span className="mt-2 block font-display text-2xl leading-tight break-all text-ivory transition group-hover:text-white">
                        {address}
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`tel:${site.phoneTel}`} className="group block py-5 no-underline">
                    <span className="block text-xs tracking-[0.16em] text-grey uppercase">Phone</span>
                    <span className="mt-2 block font-display text-3xl leading-tight text-ivory transition group-hover:text-white">
                      {site.phoneDisplay}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappHref(site.whatsappDigits, "Hello CODE & CO.")}
                    target="_blank"
                    rel="noreferrer"
                    className="group block py-5 no-underline"
                  >
                    <span className="block text-xs tracking-[0.16em] text-grey uppercase">WhatsApp</span>
                    <span className="mt-2 block font-display text-3xl leading-tight text-ivory transition group-hover:text-white">
                      {site.phoneDisplay}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="group block py-5 no-underline"
                  >
                    <span className="block text-xs tracking-[0.16em] text-grey uppercase">Instagram</span>
                    <span className="mt-2 block font-display text-2xl leading-tight text-ivory transition group-hover:text-white">
                      codesandco.studio
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
