import { sampleProfile } from "@/lib/data/sampleProfile"

import ProfileCard from "@/components/profile/ProfileCard"
import StrengthList from "@/components/profile/StrengthList"
import SupportNeedsList from "@/components/profile/SupportNeedsList"

export default function Profile() {
  return (
    <div className="space-y-6 max-w-2xl">

      <h1 className="text-3xl font-bold">
        Profile
      </h1>

      <ProfileCard
        displayName={sampleProfile.displayName}
        bio={sampleProfile.bio}
        isPublic={sampleProfile.isPublic}
      />

      <StrengthList strengths={sampleProfile.strengths} />

      <SupportNeedsList
        supportNeeds={sampleProfile.supportNeeds}
      />

    </div>
  )
}