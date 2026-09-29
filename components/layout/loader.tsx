"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const MIN_MS = 1100

export function Loader() {
  const [phase, setPhase] = useState<"show" | "exit" | "done">("show")

  useEffect(() => {
    const start = performance.now()
    let cancelled = false
    let exitTimer = 0
    let capTimer = 0

    const finish = () => {
      const wait = Math.max(0, MIN_MS - (performance.now() - start))
      exitTimer = window.setTimeout(() => {
        if (cancelled) return
        setPhase("exit")
        exitTimer = window.setTimeout(() => {
          if (!cancelled) setPhase("done")
        }, 420)
      }, wait)
    }

    if (document.readyState === "complete") finish()
    else window.addEventListener("load", finish, { once: true })
    capTimer = window.setTimeout(finish, 2400)

    return () => {
      cancelled = true
      window.clearTimeout(exitTimer)
      window.clearTimeout(capTimer)
    }
  }, [])

  if (phase === "done") return null

  return (
    <div
      className={`fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        phase === "exit" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading CODE & CO."
    >
      <div className="relative">
        <span className="absolute inset-0 -m-3 rounded-full border border-maroon/70 motion-safe:animate-ping" />
        <Image
          src="/brand/mark-cutout.webp"
          alt=""
          width={640}
          height={626}
          priority
          className="relative h-24 w-auto motion-safe:animate-[rise_0.8s_ease_both]"
        />
      </div>
      <p className="mt-6 font-display text-xl tracking-tight text-ivory">
        codes <span className="text-maroon">&</span> co.
      </p>
      <p className="mt-2 text-xs tracking-[0.22em] text-grey uppercase">
        Websites · Ideas · Beyond
      </p>
      <style>{`@keyframes rise { from { opacity: 0; transform: translateY(10px) scale(.96); } to { opacity: 1; transform: none; } }`}</style>
    </div>
  )
}
