import * as React from "react"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-base text-black outline-none transition placeholder:text-black/40 focus-visible:border-maroon focus-visible:ring-3 focus-visible:ring-maroon/25 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
