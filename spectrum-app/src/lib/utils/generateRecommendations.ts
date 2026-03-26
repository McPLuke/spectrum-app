import { TraitResponses } from "../types/responses"

export function generateRecommendations(
  responses: TraitResponses
): string[] {
  const recommendations: string[] = []

  // Sensory: Sound
  if (responses.sound !== undefined && responses.sound <= 2) {
    recommendations.push(
      "Consider working in quieter environments or using noise-cancelling headphones."
    )
  }

  // Sensory: Light
  if (responses.light !== undefined && responses.light <= 2) {
    recommendations.push(
      "Using softer lighting or reducing screen brightness may improve comfort."
    )
  }

  // Communication: Verbal
  if (responses.verbal !== undefined && responses.verbal <= 2) {
    recommendations.push(
      "Written instructions or follow-up notes may help with clarity and understanding."
    )
  }

  // Communication: Written
  if (responses.written !== undefined && responses.written >= 4) {
    recommendations.push(
      "Providing information in written form may support clearer communication."
    )
  }

  // Combined logic (more powerful)
  if (
    responses.verbal !== undefined &&
    responses.verbal <= 2 &&
    responses.written !== undefined &&
    responses.written >= 4
  ) {
    recommendations.push(
      "A communication style that prioritizes written interaction over verbal discussion may be most effective."
    )
  }

  return recommendations
}