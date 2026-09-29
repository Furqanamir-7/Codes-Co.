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
      <div className="flex flex-col gap-4 border-b border-ivory/15 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-wrap gap-x-3 gap-y-2" role="toolbar" aria-label="Filter projects">
          {categories.map((category) => {
            const active = filter === category
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(category)}
                className={`text-sm transition ${active ? "text-ivory" : "text-grey hover:text-ivory"}`}
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
        <ol className="border-b border-ivory/15">
          {visible.map((project) => {
            const index = String(projects.findIndex((item) => item.slug === project.slug) + 1).padStart(2, "0")
            return (
              <li key={project.slug} className="border-t border-ivory/15">
                <div className="grid gap-3 py-5 sm:grid-cols-[3.25rem_minmax(0,1fr)_11rem] sm:items-baseline sm:gap-6 sm:py-6">
                  <span className="font-display text-sm text-maroon">{index}</span>
                  <div className="min-w-0">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display text-2xl leading-tight text-ivory no-underline transition hover:text-white sm:text-[1.7rem]"
                    >
                      {project.title}
                    </a>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-grey">{project.summary}</p>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 sm:block sm:text-right">
                    <p className="text-xs tracking-[0.16em] text-grey uppercase">{project.category}</p>
                    <p className="font-mono text-xs text-ivory/70 sm:mt-2">{hostOf(project.url)}</p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-sm text-ivory no-underline transition hover:text-maroon sm:mt-3 sm:inline-block"
                    >
                      Case study
                    </Link>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      )}
    </div>
  )
}
