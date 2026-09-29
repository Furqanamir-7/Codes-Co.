import Image from "next/image"
import Link from "next/link"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="codes & co. home"
    >
      <Image
        src="/brand/mark-cutout.webp"
        alt=""
        width={640}
        height={626}
        className="h-10 w-auto"
        priority
      />
      <span className="font-display text-lg tracking-tight text-ivory sm:text-xl">
        codes <span className="text-maroon">&</span> co.
      </span>
    </Link>
  )
}
