import type { Metadata } from "next"
import Link from "next/link"
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CtaBand, PageHero, SectionHeading } from "@/components/shared/page-hero"
import { faqs, packages } from "@/data/content"
import { serviceGroups } from "@/data/services"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites for companies, shops, weddings, birthdays, and custom web apps. CODE & CO. quotes every project before work starts.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Sites for businesses, shops, and the days that matter.">
        Pick the kind of site you need. If it is not on this list, write anyway — the custom line
        exists for that.
      </PageHero>
      <div className="bg-black">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-8 sm:px-8 lg:grid-cols-[220px_1fr] lg:gap-16">
          <nav className="sticky top-16 z-30 flex flex-wrap gap-2 bg-black/95 py-3 backdrop-blur sm:top-20 lg:top-28 lg:block lg:space-y-1 lg:bg-transparent lg:py-0" aria-label="Service categories">
            {serviceGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="inline-flex min-h-11 items-center rounded-full border border-ivory/15 px-3 text-sm text-grey hover:border-maroon hover:text-ivory lg:flex lg:min-h-10 lg:rounded-none lg:border-0 lg:px-0"
              >
                {group.title}
              </a>
            ))}
          </nav>
          <div className="space-y-20 pb-20">
            {serviceGroups.map((group) => (
              <section key={group.id} id={group.id} className="scroll-mt-28">
                <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none text-ivory">{group.title}</h2>
                <p className="mt-4 max-w-prose text-lg text-grey">{group.intro}</p>
                <div className="mt-8 space-y-4">
                  {group.items.map((item) => (
                    <article
                      key={item.id}
                      id={item.id}
                      className="scroll-mt-28 rounded-3xl border border-ivory/10 bg-maroon-tint p-6"
                    >
                      <h3 className="font-display text-2xl text-ivory">{item.title}</h3>
                      <p className="mt-2 max-w-prose text-grey">{item.description}</p>
                      <ul className="mt-4 space-y-1 text-sm text-ivory/85">
                        {item.includes.map((point) => (
                          <li key={point}>· {point}</li>
                        ))}
                      </ul>
                      <Link
                        href={`/contact?type=${item.quote}`}
                        className="mt-5 inline-flex min-h-11 items-center text-sm text-ivory no-underline hover:text-white"
                      >
                        Get a quote
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-ivory py-20 text-black sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionHeading title="Packages" tone="dark">
            Shapes of work, not a rate card. Prices are quoted per project. Published rates are still
            to be set.
          </SectionHeading>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((pack) => (
              <article
                key={pack.name}
                className={`flex h-full flex-col rounded-3xl p-6 text-ivory ${
                  pack.highlighted
                    ? "border-2 border-ivory bg-maroon-deep"
                    : "border border-maroon bg-maroon-tint"
                }`}
              >
                <h3 className="font-display text-2xl text-ivory">{pack.name}</h3>
                <p className={`mt-2 font-display text-xl ${pack.highlighted ? "text-ivory" : "text-grey"}`}>
                  {pack.price}
                </p>
                <p className={`mt-3 text-sm leading-relaxed ${pack.highlighted ? "text-ivory/90" : "text-grey"}`}>
                  {pack.text}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ivory/90">
                  {pack.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ivory pb-20 text-black">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-4xl">Questions</h2>
          <Accordion className="mt-6">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionPanel>{faq.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
