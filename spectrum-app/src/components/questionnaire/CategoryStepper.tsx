type Props = {
  current: number
  total: number
  onNext: () => void
  onPrev: () => void
}

// The CategoryStepper component provides navigation controls for a multi-step questionnaire.
export default function CategoryStepper({
  current,
  total,
  onNext,
  onPrev,
}: Props) {
  return (
    <div className="flex justify-between items-center mt-6">

      <button
        onClick={onPrev}
        disabled={current === 0}
        className="text-sm"
      >
        Previous
      </button>

      <span className="text-sm">
        {current + 1} / {total}
      </span>

      <button
        onClick={onNext}
        disabled={current === total - 1}
        className="text-sm"
      >
        Next
      </button>

    </div>
  )
}