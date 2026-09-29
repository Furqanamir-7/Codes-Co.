export const site = {
  name: "CODE & CO.",
  tagline: "Websites • Ideas • Beyond",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "furqanamir2705@gmail.com",
  phoneDisplay: "+92 326 2803870",
  phoneTel: "+923262803870",
  whatsappDigits: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923262803870",
  location: "Lahore, Pakistan",
  github: "https://github.com/Furqanamir-7",
  instagram: "https://www.instagram.com/codesandco.studio/",
  founder: "Furqan Amir",
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const

export const websiteTypes = [
  { value: "business", label: "Business or company website" },
  { value: "landing", label: "Startup or landing page" },
  { value: "portfolio", label: "Portfolio" },
  { value: "store", label: "Online store" },
  { value: "wedding", label: "Wedding invitation" },
  { value: "birthday", label: "Birthday wish site" },
  { value: "event", label: "Another personal event" },
  { value: "app", label: "Web app or dashboard" },
  { value: "redesign", label: "Redesign of a site I already have" },
  { value: "unsure", label: "Not sure yet" },
] as const

export const budgetRanges = [
  { value: "unsure", label: "Not sure yet" },
  { value: "simple", label: "A simple site" },
  { value: "business", label: "A full business site" },
  { value: "shop", label: "A shop or a web app" },
  { value: "talk", label: "Let's talk it through" },
] as const

export const timelines = [
  { value: "soon", label: "As soon as you can" },
  { value: "month", label: "Within a month" },
  { value: "quarter", label: "One to three months" },
  { value: "flexible", label: "Flexible" },
] as const
