"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()
  if (reduce) return children
  return (
    <motion.div initial={{ opacity: 0.01 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.15 }}>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[70] bg-maroon-deep"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "right center" }}
      />
      {children}
    </motion.div>
  )
}
