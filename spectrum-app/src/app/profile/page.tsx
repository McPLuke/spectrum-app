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

// This page is a placeholder for the user's profile. It will display their strengths, support needs, and trait summary based on their responses.
export default function Profile() {
  const [responses, setResponses] = useState<TraitResponses>({})

  useEffect(() => {
    const stored = localStorage.getItem("spectrumResponses")
    if (stored) {
      setResponses(JSON.parse(stored))
    }
  }, [])

  const chartData = traitCategories.flatMap((category) =>
    category.traits.map((trait) => ({
      name: trait.label,
      value: responses[trait.id] || 3,
    }))
  )

  return (
    <div className="space-y-6 max-w-2xl">

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

    </div>
  )
}