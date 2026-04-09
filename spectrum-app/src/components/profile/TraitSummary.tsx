import Card from "@/components/ui/Card"

type Props = {
  responses: Record<string, number>
}

// The TraitSummary component takes a set of trait responses and displays them in a card format,
//  showing each trait and its corresponding value in a list.
export default function TraitSummary({ responses }: Props) {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">
        Trait Summary
      </h3>

      <ul className="space-y-2 text-sm">
        {Object.entries(responses).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
    </Card>
  )
}