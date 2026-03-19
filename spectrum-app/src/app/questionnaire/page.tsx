"use client"

import { useState } from "react"
import { traitCategories } from "@/lib/data/traits"

import TraitSlider from "@/components/questionnaire/TraitSlider"
import CategoryStepper from "@/components/questionnaire/CategoryStepper"

export default function Questionnaire() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)

  const [responses, setResponses] = useState<Record<string, number>>({})

  const currentCategory = traitCategories[currentCategoryIndex]

  const handleChange = (traitId: string, value: number) => {
    setResponses((prev) => ({
      ...prev,
      [traitId]: value,
    }))
  }

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