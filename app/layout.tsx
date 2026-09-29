import type { Metadata } from "next"
import type { ReactNode } from "react"
import { DM_Sans, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/layout/footer"
import { Loader } from "@/components/layout/loader"
import { Navbar } from "@/components/layout/navbar"
import { BackToTop, CursorGlow, WhatsAppButton } from "@/components/layout/widgets"
import { site } from "@/data/site"
import { getSiteUrl } from "@/lib/utils"
import "./globals.css"

const heading = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
})

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
})

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CODE & CO. — Websites with a point of view",
    template: "%s · CODE & CO.",
  },
  description:
    "CODE & CO. designs and builds websites for businesses, shops, and personal occasions. Websites, ideas, beyond.",
  applicationName: "CODE & CO.",
  authors: [{ name: site.founder }],
  openGraph: {
    type: "website",
    siteName: "CODE & CO.",
    title: "CODE & CO. — Websites with a point of view",
    description:
      "Websites for businesses, shops, and the days people remember. Websites, ideas, beyond.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODE & CO.",
    description: "Websites with a point of view.",
  },
}

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CODE & CO.",
  url: siteUrl,
  email: [...site.emails],
  telephone: site.phoneTel,
  founder: {
    "@type": "Person",
    name: site.founder,
  },
  sameAs: [site.instagram],
  slogan: "Websites • Ideas • Beyond",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${dm.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-black text-ivory">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[90] focus:rounded-full focus:bg-maroon focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Loader />
        <CursorGlow />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        {process.env.NEXT_PUBLIC_ANALYTICS === "1" ? <Analytics /> : null}
        <noscript>
          <style>{`[role="status"]{display:none !important}`}</style>
        </noscript>
      </body>
    </html>
  )
}
