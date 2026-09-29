import type { MetadataRoute } from "next"
import { projects } from "@/data/projects"
import { getSiteUrl } from "@/lib/utils"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const routes = ["", "/about", "/projects", "/services", "/contact", "/privacy"]
  return [
    ...routes.map((route) => ({
      url: `${base}${route || "/"}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: new Date(),
    })),
  ]
}
