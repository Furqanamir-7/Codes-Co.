"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUp } from "lucide-react"
import { WhatsAppIcon } from "@/components/layout/whatsapp-icon"
import { site } from "@/data/site"
import { whatsappHref } from "@/lib/utils"

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref(site.whatsappDigits, "Hello CODE & CO. I have a project in mind.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-maroon-deep text-ivory shadow-[0_12px_30px_-12px_rgba(104,0,24,0.9)] transition hover:-translate-y-0.5 hover:bg-maroon-tint sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon />
    </a>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  if (!show) return null
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed right-4 bottom-24 z-40 inline-flex size-11 items-center justify-center rounded-full border border-ivory/20 bg-black text-ivory hover:border-maroon sm:right-6"
    >
      <ArrowUp className="size-4" />
    </button>
  )
}

export function CursorGlow() {
  const glow = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const node = glow.current
    if (!node || !fine || reduce) return
    const move = (event: PointerEvent) => {
      node.hidden = false
      node.style.left = `${event.clientX}px`
      node.style.top = `${event.clientY}px`
    }
    window.addEventListener("pointermove", move, { passive: true })
    return () => window.removeEventListener("pointermove", move)
  }, [])

  return (
    <div
      ref={glow}
      hidden
      aria-hidden="true"
      className="pointer-events-none fixed z-30 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-maroon-deep/25 blur-3xl"
    />
  )
}
