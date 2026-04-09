"use client"

import { useEffect, useState } from "react"

export function useMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("reduceMotion")
    // If the user has a stored preference, use it. Otherwise, check the system preference.
    if (stored !== null) {
      const value = stored === "true"
      setReduced(value)
      document.documentElement.classList.toggle("reduce-motion", value)
    } else {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      // Set the initial state based on the system preference
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
    // Store the user's preference in localStorage so it persists across sessions
    localStorage.setItem("reduceMotion", String(newValue))
    document.documentElement.classList.toggle(
      "reduce-motion",
      newValue
    )
  }

  return { reduced, toggleMotion }
}