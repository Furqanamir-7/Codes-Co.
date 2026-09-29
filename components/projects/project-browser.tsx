"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { categories, projects, type ProjectCategory } from "@/data/projects"

export function ProjectBrowser() {
  const [filter, setFilter] = useState<ProjectCategory>("All")
  const reduce = useReducedMotion()
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  )

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="toolbar" aria-label="Filter projects">
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
      {visible.length === 0 ? (
        <p className="mt-10 max-w-prose rounded-2xl border border-dashed border-ivory/20 px-6 py-10 text-grey">
          Nothing in {filter} yet. The live work sits in the other filters — business sites, shops,
          a wedding invitation, and a web app.
        </p>
      ) : (
        <motion.ul layout={!reduce} className="mt-8 grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.li
                layout={!reduce}
                key={project.slug}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
              >
                <article className="group h-full overflow-hidden rounded-3xl border border-ivory/10 bg-maroon-tint transition hover:-translate-y-1 hover:border-maroon/60">
                  <a href={project.url} target="_blank" rel="noreferrer" className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover object-top transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
                      />
                      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-maroon/90 px-5 py-3 text-sm text-ivory transition duration-500 group-hover:translate-y-0 motion-reduce:static motion-reduce:translate-y-0 motion-reduce:bg-maroon">
                        Open the live site
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-maroon">{project.category}</p>
                      <h2 className="mt-2 font-display text-2xl text-ivory">{project.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-grey">{project.summary}</p>
                    </div>
                  </a>
                  <div className="flex items-center justify-between px-5 pb-5 text-sm">
                    <a href={project.url} target="_blank" rel="noreferrer" className="text-ivory underline decoration-maroon underline-offset-4">
                      Visit site
                    </a>
                    <Link href={`/projects/${project.slug}`} className="text-grey hover:text-ivory">
                      Case study
                    </Link>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </div>
  )
}
