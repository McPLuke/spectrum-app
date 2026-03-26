import Card from "@/components/ui/Card"

type Props = {
  recommendations: string[]
}

export default function SupportRecommendations({
  recommendations,
}: Props) {
  if (recommendations.length === 0) return null

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">
        Suggested Supports
      </h3>

      <ul className="space-y-2 text-sm text-spectrum-muted">
        {recommendations.map((rec, index) => (
          <li key={index}>• {rec}</li>
        ))}
      </ul>
    </Card>
  )
}