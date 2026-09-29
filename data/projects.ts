export const categories = [
  "All",
  "Business",
  "E-commerce",
  "Portfolio",
  "Wedding",
  "Birthday",
  "Landing Page",
  "Web App",
] as const

export type ProjectCategory = (typeof categories)[number]

export type Project = {
  slug: string
  title: string
  category: Exclude<ProjectCategory, "All">
  summary: string
  overview: string
  client: string
  url: string
  image: string
  imageAlt: string
  services: string[]
  tech: string[]
  points: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "saagar-foundation",
    title: "Saagar Foundation",
    category: "Business",
    summary:
      "Nonprofit site for community work, donations, and a direct way to get in touch.",
    overview:
      "Saagar Foundation’s site opens with a plain promise: compassion in action, community, dignity, and lasting impact. It introduces the foundation, its sponsors, and the work it is starting — food drives, school essentials, and household outreach — and gives people a way to donate or write in.",
    client: "Saagar Foundation",
    url: "https://www.saagarfoundation.site/",
    image: "/projects/saagar-foundation.webp",
    imageAlt: "Homepage of the Saagar Foundation website",
    services: ["Nonprofit website", "Donation and contact paths"],
    tech: ["Next.js"],
    points: [
      "States the foundation’s purpose on the first screen.",
      "Makes sponsors, contact, and donations easy to find.",
      "Talks about food drives, school essentials, and outreach without dressing the early numbers up.",
    ],
    featured: true,
  },
  {
    slug: "bulls-football-academy",
    title: "Bulls Football Academy",
    category: "Business",
    summary:
      "Academy site for coaching programs, centres, and international football tours.",
    overview:
      "Bulls Football Academy leads with the line “We lead by example. Not by words.” The site is the public home for an academy: elite coaching programs, centres, and international football tours.",
    client: "Bulls Football Academy",
    url: "https://www.bullsfc.site/",
    image: "/projects/bulls-football-academy.webp",
    imageAlt: "Homepage of the Bulls Football Academy website",
    services: ["Organization website", "Program presentation"],
    tech: ["Next.js"],
    points: [
      "Names the academy and its line of work immediately.",
      "Covers coaching programs, centres, and tours.",
      "Built as a fan- and parent-facing front door, not an internal tool.",
    ],
  },
  {
    slug: "the-paper-story",
    title: "The Paper Story",
    category: "E-commerce",
    summary:
      "Shop for premium stationery, wedding invitations, e-invites, and bespoke gifting.",
    overview:
      "The Paper Story sells more than paper. The storefront covers premium stationery, wedding invitations, e-invites, and bespoke gifting, with worldwide delivery. The homepage is built around the line “Designed to be remembered.”",
    client: "The Paper Story",
    url: "https://www.thepaperstory.store/",
    image: "/projects/the-paper-story.webp",
    imageAlt: "Homepage of The Paper Story store",
    services: ["Online store", "Wedding and e-invite presentation"],
    tech: ["Vite"],
    points: [
      "A shop for stationery and gifting, not a brochure with a buy button bolted on.",
      "Wedding invitations and e-invites have their own place in the navigation.",
      "The public description commits to worldwide delivery.",
    ],
  },
  {
    slug: "aaz-trading",
    title: "AAZ Trading",
    category: "Business",
    summary:
      "B2B site for US and Brazilian cotton, home textiles, and garments bound for South Asia.",
    overview:
      "AAZ Trading sources cotton fiber from the United States and Brazil, and quotes home textiles and garments, for factories across South Asia — Pakistan, Bangladesh, India, and Sri Lanka. The site is written for mills and factories, and it asks for a spec rather than a retail checkout.",
    client: "AAZ Trading",
    url: "https://www.aaztrading.us/",
    image: "/projects/aaz-trading.webp",
    imageAlt: "Homepage of the AAZ Trading website",
    services: ["B2B company website", "Inquiry-led layout"],
    tech: ["Next.js"],
    points: [
      "Says what is sold, where it comes from, and who it is for.",
      "Treats Pakistan as one of four South Asian markets, not the only one.",
      "Points a factory toward sending a spec.",
    ],
  },
  {
    slug: "priceyra",
    title: "Priceyra",
    category: "Web App",
    summary:
      "Shopping tool that tracks prices, spots fake sales, and helps you decide when to buy.",
    overview:
      "Priceyra is a product for shoppers, not a company brochure. The live site promises to track product prices, spot fake sales, and show when it is a good time to buy. The headline on the page is “Never buy during a fake sale again.”",
    client: "Priceyra",
    url: "https://www.priceyra.site/",
    image: "/projects/priceyra-home.webp",
    imageAlt: "Priceyra homepage with the globe graphic visible",
    services: ["Product website", "Web app marketing site"],
    tech: ["Next.js"],
    points: [
      "Explains the product in one sentence a shopper understands.",
      "Walks through how the product is meant to be used.",
      "Offers a free start, with room to upgrade.",
    ],
    featured: true,
  },
  {
    slug: "texonomy",
    title: "Texonomy",
    category: "Business",
    summary:
      "Company site for B2B textile trading and industry intelligence. Two divisions, one company.",
    overview:
      "Texonomy combines B2B textile trading with strategic industry intelligence. The public line is “Trades & Thinks” — two divisions, one company. The site is the front door for that business.",
    client: "Texonomy",
    url: "https://www.texonomy.net/",
    image: "/projects/texonomy.webp",
    imageAlt: "Homepage of the Texonomy website",
    services: ["Company website"],
    tech: ["Vite"],
    points: [
      "Holds two divisions in one identity instead of splitting them into two brands.",
      "Written for mills, manufacturers, and the people who buy from them.",
      "Dark, quiet interface that stays out of the way of the offer.",
    ],
  },
  {
    slug: "play-it-forward",
    title: "Play It Forward",
    category: "Business",
    summary:
      "Nonprofit site for animal rescue, adoption, and youth programs.",
    overview:
      "Play It Forward is an animal rescue and youth-programs nonprofit. The site invites people to adopt a pet, donate, and support youth programs, under the line “Giving every pet a second chance.”",
    client: "Play It Forward",
    url: "https://www.playitfoward.site/",
    image: "/projects/play-it-forward.webp",
    imageAlt: "Homepage of the Play It Forward website",
    services: ["Nonprofit website", "Adoption and donation paths"],
    tech: ["React", "Vite"],
    points: [
      "Puts adoption, donations, and youth programs on one site.",
      "Speaks to people who want to help an animal or a program, not to a grant committee.",
      "Uses the organization’s own name and line, without a generic charity template voice.",
    ],
  },
  {
    slug: "truckers-of-the-world",
    title: "Truckers of the World",
    category: "Business",
    summary:
      "Association site for the Truck Owners and Drivers Association and its chapter network.",
    overview:
      "Truckers of the World is the public site of the Truck Owners and Drivers Association (TODA). The line on the door is “Truckers of the World, Unite!” and the site points people at a global chapter network.",
    client: "Truck Owners and Drivers Association",
    url: "https://www.truckersoftheworld.com/",
    image: "/projects/truckers-of-the-world-home.webp",
    imageAlt: "Homepage of Truckers of the World",
    services: ["Association website"],
    tech: ["Vite"],
    points: [
      "Names the association and the chapter idea up front.",
      "Built for drivers and owners, not for a generic membership brochure.",
      "Keeps the public line — Truckers of the World, Unite! — intact.",
    ],
    featured: true,
  },
  {
    slug: "ayyn",
    title: "AYYN.",
    category: "E-commerce",
    summary:
      "Press-on nail shop for Pakistan: reusable sets, local payment, then a WhatsApp confirmation.",
    overview:
      "AYYN. is a Pakistan-based press-on nail brand. Reusable sets are delivered nationwide. The shop explains a specific checkout: order on the site, pay with NayaPay or JazzCash, then send the screenshot on WhatsApp.",
    client: "AYYN.",
    url: "https://www.ayyn.store/",
    image: "/projects/ayyn.webp",
    imageAlt: "AYYN. brand image for the press-on nail shop",
    services: ["Online store", "Local payment handoff"],
    tech: ["Next.js"],
    points: [
      "Sells reusable press-on sets, not a generic beauty template.",
      "Matches how people in Pakistan actually pay: NayaPay or JazzCash, then WhatsApp.",
      "Nationwide delivery is part of the offer, not a footnote.",
    ],
  },
  {
    slug: "olivia-and-james",
    title: "Olivia & James",
    category: "Wedding",
    summary:
      "Wedding invitation for Olivia Harper and James Bennett, 17 October 2026, Napa Valley.",
    overview:
      "A wedding invitation site for Olivia Harper and James Bennett. The page invites guests to their wedding on 17 October 2026 in Napa Valley, California. It is a personal event site, not a venue brochure.",
    client: "Olivia Harper and James Bennett",
    url: "https://wedding-invite-sand-eight.vercel.app/",
    image: "/projects/olivia-and-james.webp",
    imageAlt: "Opening screen of the Olivia and James wedding invitation",
    services: ["Wedding invitation website"],
    tech: ["Vite"],
    points: [
      "Names the couple, the date, and the place.",
      "Opens like an invitation, not a form.",
      "Shareable as a single link guests can open on a phone.",
    ],
  },
  {
    slug: "sukiri",
    title: "Sukiri",
    category: "E-commerce",
    summary:
      "Handmade slow-fashion crochet shop with a catalog and a message-to-order path.",
    overview:
      "Sukiri is a handmade slow-fashion crochet shop: a product catalog, shop browsing, and a direct-message path to order. The public project link is the storefront published for that work. When this site was built, that deployment asked for a Vercel login, so the card still points at the live address the studio uses for it.",
    client: "Sukiri",
    url: "https://sukiri-website.vercel.app/",
    image: "/projects/sukiri.webp",
    imageAlt: "Sukiri crochet shop storefront",
    services: ["Online store", "Catalog and message-to-order"],
    tech: [],
    points: [
      "A storefront for handmade crochet, with a catalog to browse.",
      "Ordering is set up as a direct message, which fits a small maker.",
      "The published address is the one linked from this studio’s work.",
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index < 0) return projects[0]
  return projects[(index + 1) % projects.length]
}
