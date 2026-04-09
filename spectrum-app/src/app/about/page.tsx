export default function About() {
  // This page provides an overview of the Spectrum application, its purpose, and how it can be used.
  return (
    <div className="space-y-6 max-w-3xl">

      <h1 className="text-3xl font-bold">About Spectrum</h1>

      <p>
        Spectrum is a web application designed to help individuals
        describe their experiences related to the autistic spectrum
        in a strengths-focused and self-directed way.
      </p>

      <p>
        The platform emphasizes self-representation rather than
        diagnosis. Users can build a personal profile describing
        their strengths, challenges, and support needs.
      </p>

      <p>
        Profiles can be shared with employers, educators,
        collaborators, or anyone who may benefit from
        understanding how someone experiences the world.
      </p>

      <p className="text-sm text-spectrum-muted">
        Disclaimer: Spectrum profiles are self-reported and are not intended
        to provide medical or clinical diagnoses.
      </p>

    </div>
  )
}