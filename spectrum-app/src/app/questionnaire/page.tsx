export default function Questionnaire() {
  return (
    <div className="space-y-8 max-w-xl">

      <h1 className="text-3xl font-bold">
        Trait Questionnaire
      </h1>

      <div className="border p-4 rounded space-y-4">

        <label className="block font-medium">
          Response to loud environments
        </label>

        <input
          type="range"
          min="1"
          max="5"
          className="w-full"
        />

        <p className="text-sm text-gray-500">
          Move the slider to indicate how comfortable
          you feel in loud environments.
        </p>

      </div>

    </div>
  )
}