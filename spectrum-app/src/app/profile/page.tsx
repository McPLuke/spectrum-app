import { sampleProfile } from "@/lib/data/sampleProfile"

export default function Profile() {
  return (
    <div className="space-y-6">

      <h1 className="text-3xl font-bold">Profile</h1>

      <div className="border p-6 rounded max-w-xl">

        <h2 className="text-xl font-semibold">
          {sampleProfile.displayName}
        </h2>

        <p className="text-sm text-gray-600">
          {sampleProfile.bio}
        </p>

        <div className="mt-4 text-sm">
          Visibility: {sampleProfile.isPublic ? "Public" : "Private"}
        </div>

      </div>

    </div>
  )
}