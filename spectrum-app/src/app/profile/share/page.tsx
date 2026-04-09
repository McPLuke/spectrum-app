"use client"

import { useEffect, useState } from "react"

import { sampleProfile } from "@/lib/data/sampleProfile"
import { TraitResponses } from "@/lib/types/responses"
import { traitCategories } from "@/lib/data/traits"

import { generateInsights } from "@/lib/utils/generateInsights"
import { generateRecommendations } from "@/lib/utils/generateRecommendations"

import SpectrumBarChart from "@/components/charts/SpectrumBarChart"

export default function ShareProfile() {
  const [responses, setResponses] = useState<TraitResponses>({})

  useEffect(() => {
    const stored = localStorage.getItem("spectrumResponses")
    if (stored) {
      setResponses(JSON.parse(stored))
    }
  }, [])

  const insights = generateInsights(responses)
  const recommendations = generateRecommendations(responses)

  const chartData = traitCategories.flatMap((category) =>
    category.traits.map((trait) => ({
      name: trait.label,
      value: responses[trait.id] || 3,
    }))
  )

  // This page is designed for sharing or printing the user's profile.
  // It includes a print button and is styled for a clean presentation without the usual app navigation.
  return (
    <div className="min-h-screen bg-spectrum-bg flex justify-center py-10">

      <div className="w-full max-w-3xl bg-spectrum-surface p-8 rounded-xl border border-spectrum-border space-y-8">
        <button
            onClick={() => window.print()}
            className="no-print px-4 py-2 border rounded text-sm"
            >Print / Save as PDF
        </button>

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">
            {sampleProfile.displayName}
          </h1>

          <p className="text-spectrum-muted mt-2">
            {sampleProfile.bio}
          </p>
        </div>

        {/* Chart */}
        {Object.keys(responses).length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Trait Overview
            </h2>

            <div className="bg-spectrum-surface border border-spectrum-border rounded-lg p-4">
              <SpectrumBarChart data={chartData} />
            </div>
          </div>
        )}

        {/* Insights */}
        {insights.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Summary
            </h2>

            <p className="text-sm text-spectrum-muted leading-relaxed">
              {insights.join(" ")}
            </p>
          </div>
        )}

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Suggested Supports
            </h2>

            <ul className="list-disc list-inside text-sm text-spectrum-muted space-y-2">
              {recommendations.map((rec, i) => (
                <li key={i}>{rec}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Footer note */}
        <div className="text-xs text-spectrum-muted border-t pt-4">
          This profile is self-reported and intended to support communication and understanding.
        </div>

      </div>

    </div>
  )
}