type Props = {
  label: string
  minLabel: string
  maxLabel: string
  value: number
  onChange: (value: number) => void
}

export default function TraitSlider({
  label,
  minLabel,
  maxLabel,
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="font-medium">{label}</label>

      <input
        type="range"
        min={1}
        max={5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />

      <div className="flex justify-between text-xs text-gray-500">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  )
}