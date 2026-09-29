"use client"

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="flex min-h-[70svh] flex-col justify-center bg-black px-5 pt-24 sm:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-display text-5xl text-ivory">Something went wrong.</h1>
        <p className="mt-4 max-w-prose text-lg text-grey">
          The page did not load. You can try again, or write to us if it keeps happening.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex h-12 items-center rounded-full bg-maroon px-6 text-ivory"
        >
          Try again
        </button>
      </div>
    </section>
  )
}
