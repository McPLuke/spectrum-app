import Card from "@/components/ui/Card"

type Props = {
  insights: string[]
}

export default function GeneratedSummary({ insights }: Props) {
  if (insights.length === 0) return null

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">
        Profile Summary
      </h3>

      <p className="text-sm text-spectrum-muted leading-relaxed">
        {insights.join(" ")}
      </p>
    </Card>
  )
}