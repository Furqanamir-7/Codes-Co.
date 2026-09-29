import type { ReactNode } from "react"

export function PageHero({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <header className="relative overflow-hidden bg-black pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(104,0,24,0.55),transparent_42%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <h1 className="max-w-4xl font-display text-[clamp(2.5rem,6vw,4.6rem)] leading-[0.96] tracking-tight text-ivory">
          {title}
        </h1>
        <div className="mt-6 max-w-prose text-lg leading-relaxed text-grey">{children}</div>
      </div>
    </header>
  )
}

export function CtaBand({
  title = "Have an idea? Let's build it.",
  body = "Tell us what the site needs to do. We reply within a day.",
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="bg-maroon-deep">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1] tracking-tight text-ivory">
            {title}
          </h2>
          <p className="mt-4 max-w-prose text-lg text-ivory/85">{body}</p>
        </div>
        <a
          href="/contact"
          className="inline-flex h-12 items-center rounded-full bg-ivory px-6 font-medium text-black transition hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
        >
          Start a project
        </a>
      </div>
    </section>
  )
}

export function SectionHeading({
  title,
  children,
  tone = "light",
}: {
  title: string
  children?: ReactNode
  tone?: "light" | "dark"
}) {
  const titleColor = tone === "dark" ? "text-black" : "text-ivory"
  const bodyColor = tone === "dark" ? "text-black/70" : "text-grey"
  return (
    <div className="max-w-2xl">
      <h2 className={`font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-tight ${titleColor}`}>
        {title}
      </h2>
      {children ? <p className={`mt-4 max-w-prose text-lg leading-relaxed ${bodyColor}`}>{children}</p> : null}
    </div>
  )
}
