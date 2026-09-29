"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { expectations, marqueeItems, process, why } from "@/data/content"
import { projects } from "@/data/projects"
import { homeServices } from "@/data/services"
import { Reveal } from "@/components/motion/reveal"
import { CtaBand, SectionHeading } from "@/components/shared/page-hero"

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee overflow-hidden border-y border-ivory/10 bg-black py-4">
      <div className="marquee-track flex w-max gap-8 pr-8 motion-reduce:hidden">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8 text-sm text-ivory">
            {item}
            <span className="text-maroon" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </div>
      <p className="hidden flex-wrap gap-x-4 gap-y-2 px-5 text-sm text-ivory motion-reduce:flex">
        {marqueeItems.join(" · ")}
      </p>
    </div>
  )
}

export function ServicesPreview() {
  return (
    <section className="bg-ivory py-20 text-black sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading title="What we build" tone="dark">
            Business sites, shops, invitations, and the occasional tool. If it lives on the web and
            a person has to trust it, it is in range.
          </SectionHeading>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((service, index) => (
            <Reveal key={service.href} delay={index * 0.04}>
              <Link
                href={service.href}
                className="block h-full rounded-2xl border border-maroon bg-maroon-tint p-6 text-ivory transition hover:-translate-y-1 hover:bg-maroon-deep"
              >
                <h3 className="font-display text-2xl text-ivory">{service.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-grey">{service.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured)
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading title="Selected work">
            Eleven live sites. These three are a start. Every card opens the real site.
          </SectionHeading>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((project) => (
            <Reveal key={project.slug}>
              <article className="group overflow-hidden rounded-3xl border border-ivory/10 bg-maroon-tint">
                <a href={project.url} target="_blank" rel="noreferrer" className="block">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={project.slug === "priceyra" ? "/projects/priceyra-home.webp" : project.image}
                      alt={
                        project.slug === "priceyra"
                          ? "Priceyra homepage with the globe graphic visible"
                          : project.imageAlt
                      }
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-top transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
                    />
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-maroon-deep/90 px-5 py-4 text-sm text-ivory transition duration-500 group-hover:translate-y-0 motion-reduce:translate-y-0">
                      Open the live site
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs tracking-wide text-maroon">{project.category}</p>
                    <h3 className="mt-2 font-display text-2xl text-ivory">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-grey">{project.summary}</p>
                  </div>
                </a>
                <div className="px-5 pb-5">
                  <Link href={`/projects/${project.slug}`} className="inline-flex min-h-11 items-center text-sm text-ivory no-underline">
                    Case study
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/projects" className="inline-flex min-h-11 items-center text-ivory no-underline">
            All projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export function Why() {
  return (
    <section className="bg-ivory py-20 text-black sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading title="Why CODE & CO." tone="dark">
            A founder-led studio. The person you write to is the person who builds the site.
          </SectionHeading>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-maroon bg-maroon-tint p-5 text-ivory">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-maroon-deep text-sm text-ivory">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-xl text-ivory">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading title="How a project moves">
            Five steps, in this order. Numbered because they really do follow each other.
          </SectionHeading>
        </Reveal>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.05}>
              <li className="h-full rounded-2xl border border-ivory/10 bg-maroon-tint p-5">
                <p className="font-display text-sm text-maroon">{item.step}</p>
                <h3 className="mt-3 font-display text-2xl text-ivory">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">{item.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function useCount(target: number, start: boolean) {
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? target : 0)
  useEffect(() => {
    if (!start) return
    if (reduce) {
      const frame = requestAnimationFrame(() => setValue(target))
      return () => cancelAnimationFrame(frame)
    }
    const began = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const progress = Math.min(1, (now - began) / 900)
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [reduce, start, target])
  return value
}

export function PortfolioFacts() {
  const [start, setStart] = useState(false)
  const sites = useCount(11, start)
  const kinds = useCount(4, start)
  return (
    <section className="bg-ivory py-20 text-black sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading title="In this portfolio" tone="dark">
            Counts below are things you can check on this site. We do not publish invented client
            totals.
          </SectionHeading>
        </Reveal>
        <motion.dl
          onViewportEnter={() => setStart(true)}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          <div className="rounded-2xl bg-black p-6 text-ivory">
            <dt className="text-sm text-grey">Live sites linked here</dt>
            <dd className="mt-3 font-display text-6xl">{sites}</dd>
          </div>
          <div className="rounded-2xl bg-black p-6 text-ivory">
            <dt className="text-sm text-grey">Kinds of work in that set</dt>
            <dd className="mt-3 font-display text-6xl">{kinds}</dd>
            <p className="mt-2 text-sm text-grey">Business, shop, wedding, web app</p>
          </div>
          <div className="rounded-2xl bg-maroon-deep p-6 text-ivory">
            <dt className="text-sm text-ivory/80">Studio</dt>
            <dd className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Founder-led</dd>
          </div>
        </motion.dl>
      </div>
    </section>
  )
}

export function Expectations() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (reduce) return
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % expectations.length)
    }, 4200)
    return () => window.clearInterval(timer)
  }, [reduce])
  const item = expectations[index]
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading title="What working together is like">
            These are studio commitments, not quotes from people we invented.
          </SectionHeading>
        </Reveal>
        <div
          className="mt-10 rounded-3xl border border-ivory/10 bg-maroon-tint p-8 sm:p-12"
          onMouseEnter={() => setIndex(index)}
        >
          <p className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] text-ivory">
            {item.title}
          </p>
          <p className="mt-4 max-w-prose text-lg text-grey">{item.text}</p>
          <div className="mt-8 flex gap-2" role="tablist" aria-label="Studio commitments">
            {expectations.map((entry, entryIndex) => (
              <button
                key={entry.title}
                type="button"
                role="tab"
                aria-selected={entryIndex === index}
                aria-label={entry.title}
                onClick={() => setIndex(entryIndex)}
                className={`h-2.5 rounded-full transition-all ${
                  entryIndex === index ? "w-8 bg-maroon" : "w-2.5 bg-ivory/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function HomeClose() {
  return <CtaBand />
}
