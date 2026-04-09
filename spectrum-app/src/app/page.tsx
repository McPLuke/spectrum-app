import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"

// The Home component serves as the landing page for the Spectrum application,
//  providing an introduction to the platform and guiding users to explore their profiles,
//  strengths, and support needs through a clean and engaging interface.
export default function Home() {
  return (
    <div className="space-y-12">

      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Spectrum</h1>

        <p className="text-lg text-spectrum-muted">
          A self-representation platform designed to help individuals
          describe their strengths, challenges, and support needs.
        </p>

        <div className="flex gap-4">
          <Button href="/profile" variant="secondary">View Profile</Button>
          <Button href="/questionnaire" variant="secondary">
            Try Questionnaire
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">

        <Card>
          <h2 className="font-semibold mb-2">
            Profile Your Experience
          </h2>
          <p className="text-sm text-spectrum-muted">
            Describe how you interact with the world.
          </p>
        </Card>

        <Card>
          <h2 className="font-semibold mb-2">
            Highlight Strengths
          </h2>
          <p className="text-sm text-spectrum-muted">
            Showcase what you do best.
          </p>
        </Card>

        <Card>
          <h2 className="font-semibold mb-2">
            Share Support Needs
          </h2>
          <p className="text-sm text-spectrum-muted">
            Communicate what helps you succeed.
          </p>
        </Card>

      </section>

    </div>
  )
}