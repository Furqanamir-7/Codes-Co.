import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CtaBand } from "@/components/shared/page-hero"
import { getNextProject, getProject, projects } from "@/data/projects"

type Params = { slug: string }

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project" }
  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()
  const next = getNextProject(project.slug)

  return (
    <>
      <header className="bg-black pt-32 pb-12 sm:pt-40">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="text-sm text-maroon">{project.category}</p>
          <h1 className="mt-3 max-w-4xl font-display text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.96] text-ivory">
            {project.title}
          </h1>
          <p className="mt-5 max-w-prose text-lg text-grey">{project.summary}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-[linear-gradient(135deg,#9D0029_0%,#680018_100%)] px-6 text-ivory"
          >
            Visit the live site
          </a>
        </div>
      </header>
      <div className="bg-black pb-16">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-3xl border border-ivory/10">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1600}
              height={1000}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
      <section className="bg-ivory py-16 text-black sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="font-display text-4xl">Overview</h2>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-black/75">{project.overview}</p>
            <h2 className="mt-12 font-display text-3xl">What the site does</h2>
            <ul className="mt-4 space-y-3">
              {project.points.map((point) => (
                <li key={point} className="max-w-prose border-l-2 border-maroon pl-4 text-black/80">
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-3xl bg-black p-6 text-ivory">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="text-grey">Client</dt>
                <dd className="mt-1 text-lg">{project.client}</dd>
              </div>
              <div>
                <dt className="text-grey">Services</dt>
                <dd className="mt-1">{project.services.join(", ")}</dd>
              </div>
              {project.tech.length > 0 ? (
                <div>
                  <dt className="text-grey">Tech on the live site</dt>
                  <dd className="mt-1">{project.tech.join(", ")}</dd>
                </div>
              ) : null}
            </dl>
          </aside>
        </div>
      </section>
      <section className="border-t border-ivory/10 bg-black py-14">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-sm text-grey">Next project</p>
            <Link href={`/projects/${next.slug}`} className="block font-display text-3xl leading-tight text-ivory no-underline">
              {next.title}
            </Link>
          </div>
          <Link href="/projects" className="inline-flex min-h-11 items-center text-sm text-ivory no-underline">
            All projects
          </Link>
        </div>
      </section>
      <CtaBand title="Want something in this family?" body="Tell us the job. We will reply within a day." />
    </>
  )
}
