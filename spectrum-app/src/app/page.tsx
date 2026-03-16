import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-10">

      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Spectrum</h1>
        <p className="text-lg">
          A self-representation platform designed to help individuals describe
          their strengths, challenges, and support needs related to the autistic spectrum.
        </p>

        <div className="flex gap-4">
          <Link href="/profile" className="bg-black text-white px-4 py-2 rounded">
            View Example Profile
          </Link>

          <Link href="/questionnaire" className="border px-4 py-2 rounded">
            Try Questionnaire
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">

        <div className="border p-4 rounded">
          <h2 className="font-semibold">Profile Your Experience</h2>
          <p>
            Describe how you experience sensory input, communication,
            and daily interactions.
          </p>
        </div>

        <div className="border p-4 rounded">
          <h2 className="font-semibold">Highlight Strengths</h2>
          <p>
            Showcase abilities like creativity, deep focus,
            or pattern recognition.
          </p>
        </div>

        <div className="border p-4 rounded">
          <h2 className="font-semibold">Share Support Needs</h2>
          <p>
            Communicate what helps you thrive in work,
            education, and collaboration.
          </p>
        </div>

      </section>

    </div>
  )
}