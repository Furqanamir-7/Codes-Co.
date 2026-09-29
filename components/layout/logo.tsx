import Image from "next/image"
import Link from "next/link"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="CODES & CO. home"
    >
      <Image
        src="/brand/mark-codes.png"
        alt=""
        width={512}
        height={512}
        className="h-10 w-auto"
        priority
      />
      <span className="font-display text-lg tracking-tight text-ivory sm:text-xl">
        CODES <span className="text-maroon">&</span> CO.
      </span>
    </Link>
  )
}
