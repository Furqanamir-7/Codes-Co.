"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUp } from "lucide-react"
import { site } from "@/data/site"
import { whatsappHref } from "@/lib/utils"

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-current">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.8.6.6-3.7-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  )
}

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref(site.whatsappDigits, "Hello CODE & CO. I have a project in mind.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-maroon text-ivory shadow-[0_12px_30px_-12px_rgba(157,0,41,0.9)] transition hover:-translate-y-0.5 hover:bg-maroon-deep sm:right-6 sm:bottom-6"
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
      className="pointer-events-none fixed z-30 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-maroon/15 blur-3xl"
    />
  )
}
