"use client"

import { sampleProfile } from "@/lib/data/sampleProfile"

import ProfileCard from "@/components/profile/ProfileCard"
import StrengthList from "@/components/profile/StrengthList"
import SupportNeedsList from "@/components/profile/SupportNeedsList"

import SpectrumBarChart from "@/components/charts/SpectrumBarChart"
import { traitCategories } from "@/lib/data/traits"

import { useEffect, useState } from "react"
import { TraitResponses } from "@/lib/types/responses"
import TraitSummary from "@/components/profile/TraitSummary"

import { generateInsights } from "@/lib/utils/generateInsights"
import GeneratedSummary from "@/components/profile/GeneratedSummary"

import { generateRecommendations } from "@/lib/utils/generateRecommendations"
import SupportRecommendations from "@/components/profile/SupportRecommendations"

// This page is a placeholder for the user's profile. It will display their strengths, support needs, and trait summary based on their responses.
export default function Profile() {
  const [responses, setResponses] = useState<TraitResponses>({})
  
  useEffect(() => {
    const stored = localStorage.getItem("spectrumResponses")
    if (stored) {
      setResponses(JSON.parse(stored))
    }
  }, [])
// Generate chart data by flattening the trait categories and mapping them to the user's responses. Default to 3 (neutral) if no response is found.
  const chartData = traitCategories.flatMap((category) =>
    category.traits.map((trait) => ({
      name: trait.label,
      value: responses[trait.id] || 3,
    }))
  )

  const insights = generateInsights(responses)
  const recommendations = generateRecommendations(responses)

  return (
    <div className="space-y-8 max-w-2xl mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold">
        Profile
      </h1>

      <ProfileCard
        displayName={sampleProfile.displayName}
        bio={sampleProfile.bio}
        isPublic={sampleProfile.isPublic}
      />

      <StrengthList strengths={sampleProfile.strengths} />

      <SupportNeedsList
        supportNeeds={sampleProfile.supportNeeds}
      />

      {Object.keys(responses).length > 0 && (
        <TraitSummary responses={responses} />
      )}

      {Object.keys(responses).length > 0 && (
        <SpectrumBarChart data={chartData} />
      )}

      {insights.length > 0 && (
        <GeneratedSummary insights={insights} />
      )}

      {recommendations.length > 0 && (
        <SupportRecommendations recommendations={recommendations} />
    )}

    </div>
  )
}