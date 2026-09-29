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
      <PageHero title="An index of the work.">
        Eleven live sites. The name opens the site in a new tab. The case study is a short account
        of what it is for.
      </PageHero>
      <section className="bg-black pb-24">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <ProjectBrowser />
        </div>
      </section>
    </>
  )
}
