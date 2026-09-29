"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { categories, projects, type Project, type ProjectCategory } from "@/data/projects"

export function ProjectBrowser() {
  const [filter, setFilter] = useState<ProjectCategory>("All")
  const reduce = useReducedMotion()
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )
  const featured = filter === "All" ? visible.filter((project) => project.featured) : []
  const rest = filter === "All" ? visible.filter((project) => !project.featured) : visible

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1" role="toolbar" aria-label="Filter projects">
          {categories.map((category) => {
            const active = filter === category
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(category)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
                  active ? "bg-maroon text-ivory" : "border border-ivory/15 text-grey hover:text-ivory"
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
        <p className="shrink-0 text-sm text-grey">
          {visible.length} live {visible.length === 1 ? "site" : "sites"}
        </p>
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 max-w-prose rounded-2xl border border-dashed border-ivory/20 px-6 py-10 text-grey">
          Nothing in {filter} yet. The live work sits in the other filters — business sites, shops,
          a wedding invitation, and a web app.
        </p>
      ) : (
        <div className="mt-8 space-y-16">
          {featured[0] ? (
            <section>
              <h2 className="font-display text-sm tracking-[0.18em] text-grey uppercase">Selected</h2>
              <div className="mt-5">
                <ProjectPoster project={featured[0]} size="lead" />
              </div>
              {featured.length > 1 ? (
                <div className="mt-5 grid gap-5 lg:grid-cols-2">
                  {featured.slice(1).map((project) => (
                    <ProjectPoster key={project.slug} project={project} size="feature" />
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}

          {rest.length > 0 ? (
            <section>
              {filter === "All" ? (
                <h2 className="font-display text-sm tracking-[0.18em] text-grey uppercase">Every other live site</h2>
              ) : null}
              <motion.ul
                layout={!reduce}
                className={`${filter === "All" ? "mt-5" : "mt-8"} grid gap-5 md:grid-cols-2`}
              >
                <AnimatePresence mode="popLayout">
                  {rest.map((project, index) => {
                    const wide = filter !== "All" && index === 0
                    return (
                      <motion.li
                        layout={!reduce}
                        key={project.slug}
                        className={wide ? "md:col-span-2" : undefined}
                        initial={reduce ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? undefined : { opacity: 0, y: 8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProjectPoster project={project} size={wide ? "lead" : "tile"} />
                      </motion.li>
                    )
                  })}
                </AnimatePresence>
              </motion.ul>
            </section>
          ) : null}
        </div>
      )}
    </div>
  )
}

function ProjectPoster({ project, size }: { project: Project; size: "lead" | "feature" | "tile" }) {
  const lead = size === "lead"
  const index = String(projects.findIndex((item) => item.slug === project.slug) + 1).padStart(2, "0")

  return (
    <article className="group overflow-hidden rounded-3xl border border-ivory/10 bg-black">
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open the live ${project.title} site`}
        className="relative block"
      >
        <div className={`relative ${lead ? "aspect-[4/5] sm:aspect-[16/9]" : "aspect-[16/10]"}`}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes={lead ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="object-cover object-top transition duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className={`absolute inset-x-0 bottom-0 ${lead ? "p-6 sm:p-10" : "p-5"}`}>
            <p className="text-xs tracking-[0.18em] text-ivory/80 uppercase">
              {index} · {project.category}
            </p>
            <h3
              className={`mt-2 max-w-3xl font-display leading-[0.96] text-ivory ${
                lead ? "text-4xl sm:text-6xl" : size === "feature" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
              }`}
            >
              {project.title}
            </h3>
            {lead ? (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/85">{project.summary}</p>
            ) : null}
          </div>
        </div>
      </a>
      <div className={`flex flex-wrap items-center gap-3 border-t border-ivory/10 ${lead ? "px-6 py-5 sm:px-10" : "px-5 py-4"}`}>
        {!lead ? <p className="mr-auto max-w-md text-sm leading-relaxed text-grey">{project.summary}</p> : null}
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center rounded-full bg-maroon px-5 text-sm text-ivory no-underline transition hover:bg-maroon-deep"
        >
          Visit site
        </a>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex h-11 items-center rounded-full border border-ivory/20 px-5 text-sm text-ivory no-underline transition hover:border-ivory"
        >
          Case study
        </Link>
      </div>
    </article>
  )
}
