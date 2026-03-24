"use client"

import { useState } from "react"
import { traitCategories } from "@/lib/data/traits"
import { TraitResponses } from "@/lib/types/responses"

import TraitSlider from "@/components/questionnaire/TraitSlider"
import CategoryStepper from "@/components/questionnaire/CategoryStepper"
import SpectrumBarChart from "@/components/charts/SpectrumBarChart"

export default function Questionnaire() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)

  const [responses, setResponses] = useState<TraitResponses>({})

  const currentCategory = traitCategories[currentCategoryIndex]

  const handleChange = (traitId: string, value: number) => {
    setResponses((prev) => ({
      ...prev,
      [traitId]: value,
    }))
  }

  const chartData = traitCategories.flatMap((category) =>
  category.traits.map((trait) => ({
    name: trait.label,
    value: responses[trait.id] || 3,
  }))
)

  return (
    <div className="space-y-8 max-w-xl">

      <h1 className="text-3xl font-bold">
        Trait Questionnaire
      </h1>

      <h2 className="text-xl font-semibold">
        {currentCategory.name}
      </h2>

      <div className="space-y-6">

        {currentCategory.traits.map((trait) => (
          <TraitSlider
            key={trait.id}
            label={trait.label}
            minLabel={trait.minLabel}
            maxLabel={trait.maxLabel}
            value={responses[trait.id] || 3}
            onChange={(value) =>
              handleChange(trait.id, value)
            }
          />
        ))}

      </div>

      <div className="mt-10">
        <h3 className="font-semibold mb-4">
         Visual Summary
        </h3>

        <SpectrumBarChart data={chartData} />
      </div>

      <button
        onClick={() => {
        localStorage.setItem(
        "spectrumResponses",
        JSON.stringify(responses)
        )
        alert("Responses saved!")
      }}
      className="mt-6 px-4 py-2 bg-black text-white rounded"
        >
         Save Responses
        </button>

      <CategoryStepper
        current={currentCategoryIndex}
        total={traitCategories.length}
        onNext={() =>
          setCurrentCategoryIndex((i) =>
            Math.min(i + 1, traitCategories.length - 1)
          )
        }
        onPrev={() =>
          setCurrentCategoryIndex((i) =>
            Math.max(i - 1, 0)
          )
        }
      />

    </div>

  )
}