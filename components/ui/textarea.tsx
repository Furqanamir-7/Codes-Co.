import * as React from "react"
import { cn } from "cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-36 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-base text-black outline-none transition placeholder:text-black/40 focus-visible:border-maroon focus-visible:ring-3 focus-visible:ring-maroon/25 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
