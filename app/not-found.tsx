import Link from "next/link"

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-start justify-center bg-black px-5 pt-24 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-sm text-maroon">404</p>
        <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.92] text-ivory">
          This page is not on the site.
        </h1>
        <p className="mt-5 max-w-prose text-lg text-grey">
          The address may be old, or the page was never built. The work and the contact form are
          still here.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center rounded-full bg-maroon-deep px-6 text-ivory hover:bg-maroon-tint"
          >
            Back home
          </Link>
          <Link
            href="/projects"
            className="inline-flex h-12 items-center rounded-full border border-ivory/30 px-6 text-ivory"
          >
            See the work
          </Link>
        </div>
      </div>
    </section>
  )
}
