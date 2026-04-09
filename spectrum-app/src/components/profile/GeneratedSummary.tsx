import Card from "@/components/ui/Card"

type Props = {
  insights: string[]
}

// The GeneratedSummary component takes an array of insights (strings) 
// and displays them as a profile summary within a styled card component. 
// If there are no insights, it returns null and renders nothing.
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