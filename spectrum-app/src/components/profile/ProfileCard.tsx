import Card from "@/components/ui/Card"

type ProfileCardProps = {
  displayName: string
  bio?: string
  isPublic: boolean
}

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