"use client"

import { useEffect, useState } from "react"

export function useMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("reduceMotion")

    if (stored !== null) {
      const value = stored === "true"
      setReduced(value)
      document.documentElement.classList.toggle("reduce-motion", value)
    } else {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches

      setReduced(prefersReduced)
      document.documentElement.classList.toggle(
        "reduce-motion",
        prefersReduced
      )
    }
  }, [])

  const toggleMotion = () => {
    const newValue = !reduced
    setReduced(newValue)

    localStorage.setItem("reduceMotion", String(newValue))
    document.documentElement.classList.toggle(
      "reduce-motion",
      newValue
    )
  }

  return { reduced, toggleMotion }
}