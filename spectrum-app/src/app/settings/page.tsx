"use client"

import ThemeToggle from "@/components/ui/ThemeToggle"
import MotionToggle from "@/components/settings/MotionToggle"
import Card from "@/components/ui/Card"

// The SettingsPage component provides a user interface for adjusting application settings,
//  such as theme and motion preferences. It is structured with sections for different
//  categories of settings, and utilizes reusable UI components for consistency.
export default function SettingsPage() {
  return (
    <div className="max-w-2xl space-y-8">

      <h1 className="text-3xl font-bold">
        Settings
      </h1>

      {/* Appearance */}
      <Card>
        <h2 className="text-xl font-semibold mb-4">
          Appearance
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-sm text-spectrum-muted">
            Theme
          </span>

          <ThemeToggle />
        </div>
      </Card>

      {/* Accessibility */}
      <Card>
        <h2 className="text-xl font-semibold mb-4">
          Accessibility
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-sm text-spectrum-muted">
            Reduce motion
          </span>

          <MotionToggle />
        </div>
      </Card>

    </div>
  )
}