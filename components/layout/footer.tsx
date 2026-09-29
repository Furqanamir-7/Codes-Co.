import Link from "next/link"
import { Logo } from "@/components/layout/logo"
import { site } from "@/data/site"
import { whatsappHref } from "@/lib/utils"

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
]

const services = [
  "Business websites",
  "Online stores",
  "Wedding invitations",
  "Birthday sites",
  "Web apps",
]

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.35-2.95a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.8.6.6-3.7-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-ivory/10 bg-black">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-grey">
            Websites for businesses, shops, and the occasions people remember.
          </p>
        </div>
        <div>
          <p className="text-sm text-ivory">Visit</p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-grey hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm text-ivory">Services</p>
          <ul className="mt-4 space-y-2">
            {services.map((item) => (
              <li key={item}>
                <Link href="/services" className="text-sm text-grey hover:text-ivory">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm text-ivory">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-grey">
            <li>
              <a className="hover:text-ivory" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="hover:text-ivory" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
          <div className="mt-5 flex gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex size-10 items-center justify-center rounded-full border border-ivory/15 text-ivory hover:border-maroon hover:text-maroon"
            >
              <GitHubIcon />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex size-10 items-center justify-center rounded-full border border-ivory/15 text-ivory hover:border-maroon hover:text-maroon"
            >
              <InstagramIcon />
            </a>
            <a
              href={whatsappHref(site.whatsappDigits, "Hello CODE & CO. I have a project in mind.")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex size-10 items-center justify-center rounded-full border border-ivory/15 text-ivory hover:border-maroon hover:text-maroon"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <p className="mx-auto w-full max-w-6xl px-5 py-5 text-sm text-grey sm:px-8">
          © {year} CODE & CO. Websites, ideas, beyond.
        </p>
      </div>
    </footer>
  )
}
