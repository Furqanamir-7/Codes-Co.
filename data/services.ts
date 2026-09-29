import type { websiteTypes } from "@/data/site"

type Quote = (typeof websiteTypes)[number]["value"]

export type ServiceItem = {
  id: string
  title: string
  description: string
  includes: string[]
  quote: Quote
}

export type ServiceGroup = {
  id: string
  title: string
  intro: string
  items: ServiceItem[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: "business",
    title: "Business and company websites",
    intro:
      "A site that tells a stranger what you do, who it is for, and how to start. Built for the phone first.",
    items: [
      {
        id: "corporate",
        title: "Corporate and company websites",
        description:
          "A clear home for a company that has more than one offer, office, or audience.",
        includes: ["Page structure for services and proof", "Contact and inquiry paths", "A layout your team can keep updating"],
        quote: "business",
      },
      {
        id: "small-business",
        title: "Small business websites",
        description:
          "For a shop, practice, or local business that needs to be found and trusted.",
        includes: ["What you do, where you are, how to book or call", "Mobile layout", "Room for photos of the real place"],
        quote: "business",
      },
      {
        id: "startup",
        title: "Startup websites and landing pages",
        description:
          "One sharp page, or a short site, for a product that is still explaining itself.",
        includes: ["A single argument, not ten pages of filler", "A clear next step", "Fast load on a phone"],
        quote: "landing",
      },
      {
        id: "portfolio-sites",
        title: "Portfolio websites",
        description:
          "For designers, photographers, freelancers, and anyone whose work has to speak before the bio does.",
        includes: ["Project pages", "A short about", "A way to hire you"],
        quote: "portfolio",
      },
      {
        id: "agency",
        title: "Agency and consultancy websites",
        description:
          "Show the work, the offer, and who a client talks to. Skip the stock-photo office.",
        includes: ["Case-style project entries", "Services written in plain language", "A contact path that is not a black hole"],
        quote: "business",
      },
      {
        id: "restaurant",
        title: "Restaurant and café websites",
        description:
          "Menu, hours, location, and a way to reserve or order. Guests decide on a phone, outside, in a hurry.",
        includes: ["Menu that is easy to scan", "Hours and map", "Reservation or contact"],
        quote: "business",
      },
      {
        id: "real-estate",
        title: "Real estate websites",
        description:
          "Listings and a way to ask about one. Built so an inquiry has the property attached to it.",
        includes: ["Listing layout", "Inquiry forms", "Agent or office contact"],
        quote: "business",
      },
      {
        id: "education",
        title: "Education websites",
        description:
          "Schools, academies, and course sites. Parents and students need dates, fees, and how to apply.",
        includes: ["Programs and courses", "Admissions or enrollment path", "Contact for a real person"],
        quote: "business",
      },
      {
        id: "healthcare",
        title: "Healthcare and clinic websites",
        description:
          "What the clinic treats, who the patient sees, and how to book. No mystery phone tree.",
        includes: ["Services and practitioners", "Appointment or inquiry", "Location and hours"],
        quote: "business",
      },
      {
        id: "ngo",
        title: "NGO and nonprofit websites",
        description:
          "The work, the people it is for, and a honest way to give time or money.",
        includes: ["Programs explained simply", "Donation or volunteer path", "Contact that a real person reads"],
        quote: "business",
      },
    ],
  },
  {
    id: "commerce",
    title: "E-commerce",
    intro:
      "A shop people can understand. Catalog, price, and a checkout that matches how your customers actually pay.",
    items: [
      {
        id: "stores",
        title: "Online stores",
        description:
          "Shopify, WooCommerce, or a custom shop when the usual platforms do not fit the way you sell.",
        includes: ["Product catalog", "Cart and checkout", "A platform choice made for the business, not for us"],
        quote: "store",
      },
      {
        id: "catalogs",
        title: "Product catalog websites",
        description:
          "When you quote rather than take a card payment. The catalog still has to be easy to browse.",
        includes: ["Product or collection pages", "Inquiry on a specific item", "Filters that match how buyers search"],
        quote: "store",
      },
      {
        id: "payments",
        title: "Payment setup",
        description:
          "Cards, local wallets, or a pay-then-confirm flow such as a transfer plus a WhatsApp screenshot.",
        includes: ["The payment method your customers already use", "A clear success and failure state", "An order the shop can actually fulfill"],
        quote: "store",
      },
    ],
  },
  {
    id: "events",
    title: "Personal and event websites",
    intro:
      "A link you send instead of a paper card. The day, the place, and the feeling of the occasion.",
    items: [
      {
        id: "wedding",
        title: "Wedding invitation websites",
        description:
          "A private invitation guests open on their phone. The couple, the day, and the details they actually need.",
        includes: [
          "Couple story",
          "Schedule, venue, and map",
          "RSVP, gallery, countdown, and guest wishes when you want them",
        ],
        quote: "wedding",
      },
      {
        id: "birthday",
        title: "Birthday wish websites",
        description:
          "A surprise page for one person. A message, photos, and a link that is easy to share.",
        includes: [
          "A personal message",
          "Photo sequence",
          "Countdown, motion, and a shareable link when the surprise calls for them",
        ],
        quote: "birthday",
      },
      {
        id: "occasions",
        title: "Anniversaries, engagements, showers, and graduations",
        description:
          "The same care as a wedding site, scaled to the occasion.",
        includes: ["The story of the day", "Practical details", "A link guests can keep"],
        quote: "event",
      },
      {
        id: "memorial",
        title: "Memorial and tribute pages",
        description:
          "A quiet page for a life. Photos, a few words, and a place for others to write if you want that.",
        includes: ["A calm layout", "Photos and a written tribute", "Optional messages from family and friends"],
        quote: "event",
      },
    ],
  },
  {
    id: "apps",
    title: "Web applications and custom work",
    intro:
      "When a website is also a tool. We build the part people use, and the part you run it from.",
    items: [
      {
        id: "web-apps",
        title: "Custom web apps and dashboards",
        description:
          "A tool for a job your team repeats. Scoped tightly so it ships, instead of becoming a platform.",
        includes: ["The workflow written down first", "Screens for the people who use it", "A build you can hand to another developer later"],
        quote: "app",
      },
      {
        id: "booking",
        title: "Booking and appointment systems",
        description:
          "Someone picks a time. You see the booking. Nobody has to chase it in a chat thread.",
        includes: ["Availability", "Confirmation", "A list you can manage"],
        quote: "app",
      },
      {
        id: "admin",
        title: "Admin panels and content editing",
        description:
          "Change the words, prices, or posts without asking us for every comma.",
        includes: ["An editor matched to what you actually update", "Roles if more than one person logs in", "A backup of the content"],
        quote: "app",
      },
      {
        id: "blogs",
        title: "Blogs and news sites",
        description:
          "Writing that is easy to publish and easy to read. Not a theme with twelve widgets.",
        includes: ["Posts and categories", "A readable article layout", "A way for you to publish"],
        quote: "business",
      },
      {
        id: "membership",
        title: "Membership and login",
        description:
          "A private area for members, students, or customers. Only if the project truly needs accounts.",
        includes: ["Sign up and sign in", "A private area", "A way to reset access"],
        quote: "app",
      },
      {
        id: "integrations",
        title: "APIs and third-party tools",
        description:
          "Payments, maps, email, WhatsApp, or the system you already run the business on.",
        includes: ["The connection the business needs", "A failure state a person can understand", "No extra integration for its own sake"],
        quote: "app",
      },
    ],
  },
  {
    id: "addons",
    title: "Add-on services",
    intro:
      "The work around the site. Design, words, speed, the domain, and someone to call after launch.",
    items: [
      {
        id: "design",
        title: "UI and UX design",
        description:
          "Screens and a Figma file before a line of production code, when the project needs that step.",
        includes: ["Page structure", "A visual direction", "A prototype you can click"],
        quote: "unsure",
      },
      {
        id: "redesign",
        title: "Website redesign",
        description:
          "The business changed, or the old site never said what it should. We rebuild it properly.",
        includes: ["What to keep and what to drop", "A new structure", "The same addresses, where it matters for search"],
        quote: "redesign",
      },
      {
        id: "brand",
        title: "Logo and basic identity",
        description:
          "A mark, type, and colors if you are starting without them. Enough to launch, not a 90-page brand book.",
        includes: ["A usable logo", "Colors and type", "Files you can hand to a printer"],
        quote: "unsure",
      },
      {
        id: "seo",
        title: "SEO basics",
        description:
          "Titles, descriptions, headings, and a site search engines can read. Not a promise of page-one rankings.",
        includes: ["Page titles and descriptions", "Sensible headings", "A sitemap"],
        quote: "unsure",
      },
      {
        id: "speed",
        title: "Speed and performance",
        description:
          "Images, fonts, and code that do not make a phone wait.",
        includes: ["A look at what is slow", "Fixes that a visitor can feel", "A check after the change"],
        quote: "redesign",
      },
      {
        id: "hosting",
        title: "Domain and hosting setup",
        description:
          "The name, the hosting, and the lock so the site is actually yours.",
        includes: ["Domain pointed at the site", "Hosting under your account", "SSL"],
        quote: "unsure",
      },
      {
        id: "care",
        title: "Maintenance and support",
        description:
          "After launch, someone still answers. Updates, small edits, and a person to write to when something breaks.",
        includes: ["A named way to reach us", "Small content edits", "A look when the site misbehaves"],
        quote: "unsure",
      },
      {
        id: "content",
        title: "Words and image editing",
        description:
          "If you have the facts and not the sentences, we can write the pages and prepare the photos.",
        includes: ["Page copy in your voice", "Cropped, sized images", "No lorem, ever"],
        quote: "unsure",
      },
      {
        id: "languages",
        title: "More than one language",
        description:
          "A site that can be read in the languages your customers actually use.",
        includes: ["A language switch", "Translated pages", "A way to edit each language"],
        quote: "business",
      },
      {
        id: "security",
        title: "Security and backups",
        description:
          "Accounts in your name, backups, and the boring settings that keep a site from being the weak one.",
        includes: ["Backups", "Access handed to you", "Updates for the stack we chose"],
        quote: "unsure",
      },
    ],
  },
]

export const homeServices = [
  {
    href: "/services#business",
    title: "Business websites",
    text: "Company, clinic, academy, nonprofit. A site that says what you do.",
  },
  {
    href: "/services#commerce",
    title: "Online stores",
    text: "A catalog and a checkout that matches how your customers pay.",
  },
  {
    href: "/services#wedding",
    title: "Wedding invitations",
    text: "A link for the couple, the day, the place, and the people you invite.",
  },
  {
    href: "/services#birthday",
    title: "Birthday sites",
    text: "A surprise page. Photos, a message, and a link you can send.",
  },
  {
    href: "/services#apps",
    title: "Web apps",
    text: "Booking, dashboards, and tools when a brochure is not enough.",
  },
  {
    href: "/services#addons",
    title: "Redesign and care",
    text: "A tired site rebuilt, then someone to call after it launches.",
  },
]
