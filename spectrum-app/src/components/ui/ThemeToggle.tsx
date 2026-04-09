"use client"

import { useTheme } from "@/lib/hooks/useTheme"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="text-sm px-3 py-1 border border-spectrum-border rounded bg-spectrum-surface text-spectrum-text hover:bg-spectrum-bg transition"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  )
}