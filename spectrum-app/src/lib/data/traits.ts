// This file defines the traits and categories used in the application to capture user preferences and characteristics.
export const traitCategories = [
  {
    id: "sensory",
    name: "Sensory Processing",
    traits: [
      {
        id: "sound",
        label: "Response to loud environments",
        minLabel: "Very overwhelming",
        maxLabel: "No issue",
      },
      {
        id: "light",
        label: "Sensitivity to bright lights",
        minLabel: "Very sensitive",
        maxLabel: "No sensitivity",
      },
    ],
  },
  {
    id: "communication",
    name: "Communication",
    traits: [
      {
        id: "verbal",
        label: "Comfort with verbal communication",
        minLabel: "Very difficult",
        maxLabel: "Very comfortable",
      },
      {
        id: "written",
        label: "Preference for written communication",
        minLabel: "Strongly prefer verbal",
        maxLabel: "Strongly prefer written",
      },
    ],
  },
]