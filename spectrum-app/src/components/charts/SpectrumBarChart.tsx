"use client"

// The SpectrumBarChart component is a reusable chart component that takes in an array of data objects,
//  each containing a name and value, and renders a bar chart using the Recharts library,
//  styled to fit within the application's design system.
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

type Props = {
  data: {
    name: string
    value: number
  }[]
}

// The SpectrumBarChart component renders a bar chart using the Recharts library,
//  displaying the provided data with names on the X-axis and values on the Y-axis,
//  styled within a container that matches the application's design system.
export default function SpectrumBarChart({ data }: Props) {
  return (
    <div className="w-full h-64 bg-spectrum-surface p-4 rounded-xl border border-spectrum-border">
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis domain={[1, 5]} />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}