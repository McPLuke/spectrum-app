import Card from "@/components/ui/Card"

type ProfileCardProps = {
  displayName: string
  bio?: string
  isPublic: boolean
}

// The ProfileCard component displays a user's profile information, including their display name,
//  an optional bio, and their profile visibility status (public or private), 
// all styled within a card component.
export default function ProfileCard({
  displayName,
  bio,
  isPublic,
}: ProfileCardProps) {
  return (
    <Card>
      <h2 className="text-xl font-semibold">{displayName}</h2>

      {bio && (
        <p className="text-spectrum-muted mt-2">{bio}</p>
      )}

      <p className="text-sm mt-4">
        Visibility: {isPublic ? "Public" : "Private"}
      </p>
    </Card>
  )
}