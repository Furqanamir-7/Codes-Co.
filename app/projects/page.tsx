import type { Metadata } from "next"
import { ProjectBrowser } from "@/components/projects/project-browser"
import { PageHero } from "@/components/shared/page-hero"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Live websites by CODE & CO. — foundations, academies, shops, a wedding invitation, and a price-tracking product.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Work you can open.">
        Every project below is a live site. The card opens it in a new tab. The case study is a
        short note on what the site is for — no invented metrics.
      </PageHero>
      <section className="bg-black pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <ProjectBrowser />
        </div>
      </section>
    </>
  )
}
