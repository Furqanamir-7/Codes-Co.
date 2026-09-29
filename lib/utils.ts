export { cn } from "cn"

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")
  if (explicit) return explicit
  if (process.env.VERCEL_ENV === "production") return "https://www.codesandco.site"
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (production) return `https://${production}`
  return "http://localhost:38471"
}

export function whatsappHref(digits: string, text?: string) {
  const base = `https://wa.me/${digits}`
  if (!text) return base
  return `${base}?text=${encodeURIComponent(text)}`
}
