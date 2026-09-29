"use client"

import { useState } from "react"
import { site } from "@/data/site"
import { whatsappHref } from "@/lib/utils"

export function QuoteChooser({ id, service }: { id: string; service: string }) {
  const [open, setOpen] = useState(false)
  const note = `Hello CODE & CO. I would like a quote for ${service}.`
  const email = site.emails[0]
  const mailto = `mailto:${email}?subject=${encodeURIComponent(`Quote for ${service}`)}&body=${encodeURIComponent(note)}`
  const panelId = `quote-${id}`

  return (
    <div className="mt-5">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 items-center text-sm text-ivory hover:text-white"
      >
        Get a quote
      </button>
      {open ? (
        <div
          id={panelId}
          className="mt-3 flex flex-wrap gap-2"
          role="group"
          aria-label={`Ask for a ${service} quote`}
        >
          <a
            href={whatsappHref(site.whatsappDigits, note)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-maroon-deep px-4 text-sm text-ivory no-underline hover:bg-maroon-tint"
          >
            WhatsApp
          </a>
          <a
            href={mailto}
            className="inline-flex min-h-11 items-center rounded-full border border-ivory/30 px-4 text-sm text-ivory no-underline hover:border-ivory"
          >
            Email
          </a>
        </div>
      ) : null}
    </div>
  )
}
