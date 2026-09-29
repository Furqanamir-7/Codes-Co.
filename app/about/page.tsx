import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/motion/reveal"
import { CtaBand, PageHero, SectionHeading } from "@/components/shared/page-hero"
import { tools, values } from "@/data/content"
import { site } from "@/data/site"
import { whatsappHref } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About",
  description:
    "CODE & CO. is Furqan Amir’s studio in Lahore. We design and build websites for businesses, shops, and personal occasions.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero title="A studio that builds the site, then stands by it.">
        CODE & CO. is Furqan Amir’s studio. We make websites for companies, shops, and the days
        people remember — weddings, birthdays, and the rest.
      </PageHero>
      <section className="bg-ivory py-20 text-black sm:py-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionHeading title="Our story" tone="dark">
              Furqan started CODE & CO. so a business, a shop, or a family marking a day could have
              a site with a point of view — not a template with the name swapped. He designs and
              builds the work from Lahore. The projects on this site are live. You can open them.
            </SectionHeading>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-black/75">
              The studio stays small on purpose. You write to the person who will make the site.
              When a project needs a specialist, we bring one in. We do not pretend there is a floor
              of account managers.
            </p>
          </Reveal>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-black">
              <div
                className="absolute inset-0 bg-maroon"
                style={{ clipPath: "polygon(42% 0, 100% 0, 100% 100%, 18% 100%)" }}
                aria-hidden="true"
              />
              <Image
                src="/brand/lockup-alt-cutout.webp"
                alt="CODE & CO. wordmark on a diagonal black and maroon panel"
                width={1400}
                height={791}
                className="relative h-auto w-full p-6 sm:p-10"
              />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-black py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading title="Mission and values">
              Build sites that are clear on a phone, honest about the business, and finished when we
              say they are.
            </SectionHeading>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Reveal key={value.title}>
                <article className="h-full rounded-2xl border border-ivory/10 bg-maroon-tint p-5">
                  <h3 className="font-display text-2xl text-ivory">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-grey">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ivory py-20 text-black sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading title="The studio" tone="dark">
              Founder-led. A portrait will live here when we photograph one.
            </SectionHeading>
          </Reveal>
          <article className="mt-10 max-w-md rounded-3xl border border-black/10 bg-white p-6">
            {/* TODO: replace the monogram with a real portrait of Furqan Amir. */}
            <div className="flex size-20 items-center justify-center rounded-full bg-maroon font-display text-2xl text-ivory">
              FA
            </div>
            <h3 className="mt-5 font-display text-3xl">{site.founder}</h3>
            <p className="text-maroon">Founder</p>
            <p className="mt-3 text-sm leading-relaxed text-black/70">
              Designs and builds the sites. Based in Lahore. The work linked from this site is his.
            </p>
            <div className="mt-5 flex gap-4 text-sm">
              <a className="underline decoration-maroon" href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="underline decoration-maroon" href={whatsappHref(site.whatsappDigits)} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="underline decoration-maroon" href={`mailto:${site.email}`}>
                Email
              </a>
            </div>
          </article>
        </div>
      </section>
      <section className="bg-black py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading title="Tools we actually use">
              The stack depends on the job. These are the ones the studio reaches for.
            </SectionHeading>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {tools.map((tool) => (
              <li key={tool}>
                <div className="flex h-full items-center justify-center rounded-2xl border border-ivory/10 bg-maroon-tint px-3 py-6 text-center text-sm text-ivory transition hover:-translate-y-1 hover:border-maroon">
                  {tool}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-grey">
            Want the work, not the biography? <Link className="text-ivory underline decoration-maroon" href="/projects">See the projects.</Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
