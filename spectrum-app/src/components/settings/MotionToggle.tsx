"use client"

import { useMotion } from "@/lib/hooks/useMotion"

export default function MotionToggle() {
  const { reduced, toggleMotion } = useMotion()

  return (
    <button
      onClick={toggleMotion}
      className="text-sm px-3 py-1 border border-spectrum-border rounded transition"
    >
      {reduced ? "Reduced" : "Full Motion"}
    </button>
  )
}