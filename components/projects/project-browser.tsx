"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { categories, projects, type ProjectCategory } from "@/data/projects"

function hostOf(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "")
  } catch {
    return url
  }
}

export function ProjectBrowser() {
  const [filter, setFilter] = useState<ProjectCategory>("All")
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter projects">
          {categories.map((category) => {
            const active = filter === category
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(category)}
                className={`inline-flex min-h-11 items-center rounded-full px-3.5 text-sm transition ${
                  active ? "bg-maroon text-ivory" : "text-grey hover:bg-maroon-tint hover:text-ivory"
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>
        <p className="shrink-0 text-xs tracking-[0.16em] text-grey uppercase">
          {visible.length} {visible.length === 1 ? "entry" : "entries"}
        </p>
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 max-w-prose text-sm leading-relaxed text-grey">
          Nothing in {filter} yet. The live work sits in the other filters — business sites, shops,
          a wedding invitation, and a web app.
        </p>
      ) : (
        <ol className="mt-6 border-l-2 border-maroon">
          {visible.map((project) => {
            const index = String(projects.findIndex((item) => item.slug === project.slug) + 1).padStart(2, "0")
            return (
              <li key={project.slug} className="border-t border-ivory/10 first:border-t-0">
                <article className="grid grid-cols-[3.75rem_minmax(0,1fr)] gap-x-3 px-4 py-7 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-x-6 sm:px-6 sm:py-9">
                  <p className="font-display text-4xl leading-none text-maroon sm:text-6xl" aria-hidden="true">
                    {index}
                  </p>
                  <div className="min-w-0">
                    <p className="text-xs tracking-[0.18em] text-grey uppercase">{project.category}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block py-1 font-display text-[clamp(1.65rem,5vw,2.5rem)] leading-[1.05] text-ivory no-underline transition hover:text-white"
                    >
                      {project.title}
                    </a>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-grey">{project.summary}</p>
                    <p className="mt-3 font-mono text-xs break-all text-ivory/60">{hostOf(project.url)}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center rounded-full bg-maroon px-5 text-sm text-ivory no-underline transition hover:bg-maroon-deep"
                      >
                        Open site
                      </a>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex min-h-11 items-center rounded-full border border-ivory/25 px-5 text-sm text-ivory no-underline transition hover:border-ivory"
                      >
                        Case study
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      )}
    </div>
  )
}
