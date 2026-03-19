import Card from "@/components/ui/Card"

type Strength = {
  id: string
  title: string
  description?: string
}

type Props = {
  strengths: Strength[]
}

export default function StrengthList({ strengths }: Props) {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">
        Strengths
      </h3>

      <ul className="space-y-3">
        {strengths.map((strength) => (
          <li key={strength.id}>
            <p className="font-medium">{strength.title}</p>
            {strength.description && (
              <p className="text-sm text-gray-600">
                {strength.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Card>
  )
}