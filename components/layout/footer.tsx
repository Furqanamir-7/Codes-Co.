import Link from "next/link"
import { Logo } from "@/components/layout/logo"
import { WhatsAppIcon } from "@/components/layout/whatsapp-icon"
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

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.35-2.95a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
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
            {site.emails.map((address) => (
              <li key={address}>
                <a className="inline-flex min-h-11 items-center break-all hover:text-ivory no-underline" href={`mailto:${address}`}>
                  {address}
                </a>
              </li>
            ))}
            <li>
              <a className="inline-flex min-h-11 items-center hover:text-ivory no-underline" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex size-11 items-center justify-center rounded-full border border-ivory/15 text-ivory hover:border-maroon hover:text-maroon"
            >
              <InstagramIcon />
            </a>
            <a
              href={whatsappHref(site.whatsappDigits, "Hello CODE & CO. I have a project in mind.")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex size-11 items-center justify-center rounded-full border border-ivory/15 text-ivory hover:border-maroon hover:text-maroon"
            >
              <WhatsAppIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <p className="mx-auto w-full max-w-6xl px-5 py-5 pr-20 pb-24 text-sm text-grey sm:px-8 sm:pr-24">
          © {year} CODE & CO. Websites, ideas, beyond.
        </p>
      </div>
    </footer>
  )
}
