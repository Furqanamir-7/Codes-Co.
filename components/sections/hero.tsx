"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"

const lines = [
  "const brief = {",
  '  client: "you",',
  '  need: "a site with a point of view",',
  "};",
  "",
  "launch(brief);",
]

export function Hero() {
  const reduce = useReducedMotion()
  const [count, setCount] = useState(reduce ? lines.join("\n").length : 0)
  const full = lines.join("\n")

  useEffect(() => {
    if (reduce) return
    if (count >= full.length) return
    const timer = window.setTimeout(() => setCount((value) => value + 1), 28)
    return () => window.clearTimeout(timer)
  }, [count, full.length, reduce])

  const typed = reduce ? full : full.slice(0, count)
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 } },
  }
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
  }

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-black pt-24">
      <div className="orb pointer-events-none absolute -left-20 top-24 size-[28rem] rounded-full bg-maroon/25 blur-3xl" />
      <div
        className="orb pointer-events-none absolute right-0 bottom-0 size-[24rem] rounded-full bg-maroon-deep/50 blur-3xl"
        style={{ animationDelay: "-8s" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(243,238,233,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(243,238,233,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="text-sm tracking-[0.18em] text-grey">
            WEBSITES • IDEAS • BEYOND
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.92] tracking-tight text-ivory"
          >
            Websites with a point of view.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-prose text-lg leading-relaxed text-grey">
            Your site should say who you are before anyone reads a paragraph. CODE & CO. designs and
            builds it — for a company, a shop, or a day people will remember.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button nativeButton={false} render={<Link href="/contact" />} size="lg">
              Start a project
            </Button>
            <Button nativeButton={false} render={<Link href="/projects" />} size="lg" variant="outline">
              See our work
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col gap-4"
        >
          <div className="overflow-hidden rounded-3xl border border-ivory/10 shadow-[0_30px_80px_-40px_rgba(157,0,41,0.8)]">
            <Image
              src="/brand/lockup-hero.webp"
              alt="CODE & CO. wordmark and the tagline Websites, Ideas, Beyond"
              width={1400}
              height={788}
              priority
              className="h-auto w-full"
            />
          </div>
          <div className="rounded-2xl border border-ivory/10 bg-maroon-tint p-4 shadow-lg">
            <div className="mb-3 flex gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-maroon" />
              <span className="size-2.5 rounded-full bg-ivory/30" />
              <span className="size-2.5 rounded-full bg-ivory/15" />
            </div>
            <pre className="min-h-36 overflow-x-auto font-mono text-sm leading-relaxed text-grey">
              <code>
                {typed}
                <span className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 bg-maroon motion-safe:animate-pulse" />
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
