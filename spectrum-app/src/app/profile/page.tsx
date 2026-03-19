import { sampleProfile } from "@/lib/data/sampleProfile"
import Card from "@/components/ui/Card"

export default function Profile() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">Profile</h1>

      <Card>
        <h2 className="text-xl font-semibold">
          {sampleProfile.displayName}
        </h2>

        <p className="text-gray-600 mt-2">
          {sampleProfile.bio}
        </p>

        <p className="text-sm mt-4">
          Visibility: {sampleProfile.isPublic ? "Public" : "Private"}
        </p>
      </Card>

    </div>
  )
}