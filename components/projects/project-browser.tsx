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
        <div className="mt-10 space-y-14">
          {featured.length > 0 ? (
            <section>
              <h2 className="font-display text-sm tracking-[0.18em] text-grey uppercase">Selected</h2>
              <div className="mt-5 grid gap-5">
                {featured[0] ? <ProjectCard project={featured[0]} variant="lead" /> : null}
                {featured.length > 1 ? (
                  <div className="grid gap-5 lg:grid-cols-2">
                    {featured.slice(1).map((project) => (
                      <ProjectCard key={project.slug} project={project} variant="feature" />
                    ))}
                  </div>
                ) : null}
              </div>
            </section>
          ) : null}

          {rest.length > 0 ? (
            <section>
              {filter === "All" ? (
                <h2 className="font-display text-sm tracking-[0.18em] text-grey uppercase">Every other live site</h2>
              ) : null}
              <motion.ul layout={!reduce} className={`${filter === "All" ? "mt-5" : ""} grid gap-5 sm:grid-cols-2 xl:grid-cols-3`}>
                <AnimatePresence mode="popLayout">
                  {rest.map((project, index) => {
                    const wide = filter !== "All" && (rest.length === 1 || index === 0)
                    return (
                      <motion.li
                        layout={!reduce}
                        key={project.slug}
                        className={wide ? "sm:col-span-2 xl:col-span-3" : undefined}
                        initial={reduce ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? undefined : { opacity: 0, y: 8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProjectCard project={project} variant={wide ? "lead" : "tile"} />
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

function ProjectCard({
  project,
  variant,
}: {
  project: Project
  variant: "lead" | "feature" | "tile"
}) {
  const lead = variant === "lead"
  const feature = variant === "feature"

  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-ivory/10 bg-maroon-tint transition hover:border-maroon/70">
      <div className={lead ? "grid lg:grid-cols-[1.35fr_0.85fr]" : ""}>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open the live ${project.title} site`}
          className="relative block overflow-hidden"
        >
          <div className={`relative ${lead ? "aspect-[16/10] lg:aspect-auto lg:min-h-[28rem] lg:h-full" : feature ? "aspect-[16/10]" : "aspect-[16/11]"}`}>
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes={lead ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"}
              className="object-cover object-top transition duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
            />
          </div>
        </a>
        <div className={`flex flex-col ${lead ? "justify-center p-6 sm:p-8 lg:p-10" : "p-5"}`}>
          <p className="text-xs tracking-[0.16em] text-maroon uppercase">{project.category}</p>
          <h3 className={`mt-3 font-display leading-[1.02] text-ivory ${lead ? "text-4xl sm:text-5xl" : feature ? "text-3xl" : "text-2xl"}`}>
            {project.title}
          </h3>
          <p className={`mt-3 leading-relaxed text-grey ${lead ? "text-base" : "text-sm"}`}>{project.summary}</p>
          {lead && project.services.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <li key={service} className="rounded-full border border-ivory/15 px-3 py-1 text-xs text-ivory/80">
                  {service}
                </li>
              ))}
            </ul>
          ) : null}
          <div className={`flex flex-wrap gap-3 ${lead ? "mt-6" : "mt-5"}`}>
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
        </div>
      </div>
    </article>
  )
}
