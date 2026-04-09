import { TraitResponses } from "../types/responses"

export function generateInsights(responses: TraitResponses): string[] {
  const insights: string[] = []

  // Sensory
  if (responses.sound !== undefined) {
    if (responses.sound <= 2) {
      insights.push(
        "You may find loud environments overwhelming and prefer quieter spaces."
      )
    } else if (responses.sound >= 4) {
      insights.push(
        "You appear comfortable in environments with varying noise levels."
      )
    }
  }

  if (responses.light !== undefined) {
    if (responses.light <= 2) {
      insights.push(
        "Bright lights may be uncomfortable, and softer lighting could be beneficial."
      )
    }
  }

  // Communication
  if (responses.verbal !== undefined) {
    if (responses.verbal <= 2) {
      insights.push(
        "Verbal communication may be challenging, especially in fast-paced conversations."
      )
    } else if (responses.verbal >= 4) {
      insights.push(
        "You seem comfortable expressing yourself verbally."
      )
    }
  }
  // Written Communication
  if (responses.written !== undefined) {
    if (responses.written >= 4) {
      insights.push(
        "You may prefer written communication, which allows for clarity and processing time."
      )
    }
  }

  return insights
}