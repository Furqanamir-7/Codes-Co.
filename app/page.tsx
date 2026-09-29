import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import {
  Expectations,
  FeaturedProjects,
  HomeClose,
  Marquee,
  PortfolioFacts,
  Process,
  ServicesPreview,
  Why,
} from "@/components/sections/home-sections"

export const metadata: Metadata = {
  title: { absolute: "CODE & CO. — Websites with a point of view" },
  description:
    "CODE & CO. builds websites for businesses, shops, and personal occasions. Websites, ideas, beyond.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesPreview />
      <FeaturedProjects />
      <Why />
      <Process />
      <PortfolioFacts />
      <Expectations />
      <HomeClose />
    </>
  )
}
