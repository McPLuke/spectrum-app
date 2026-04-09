import Card from "@/components/ui/Card"

type SupportNeed = {
  id: string
  description: string
}

type Props = {
  supportNeeds: SupportNeed[]
}

// The SupportNeedsList component displays a list of support needs for a user's profile,
//  rendering each need as a list item within a styled card component.
export default function SupportNeedsList({ supportNeeds }: Props) {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">
        Support Needs
      </h3>

      <ul className="space-y-2 list-disc list-inside">
        {supportNeeds.map((need) => (
          <li key={need.id} className="text-sm text-spectrum-muted">
            {need.description}
          </li>
        ))}
      </ul>
    </Card>
  )
}