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
    <div className="bg-spectrum-surface p-6 rounded-xl border border-spectrum-border space-y-6">
      <label className="font-medium">{label}</label>

      <input
        type="range"
        min={1}
        max={5}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-spectrum-primary transition-all duration-150"
      />

      <div className="flex justify-between text-xs text-spectrum-muted">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  )
}