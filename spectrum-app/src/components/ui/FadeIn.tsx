"use client"

import { useEffect, useState } from "react"

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  // The transition is handled by Tailwind CSS classes. When the component mounts, 
  // it starts with opacity 0 and transitions to opacity 100.
  return (
    <div
      className={`transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  )
}