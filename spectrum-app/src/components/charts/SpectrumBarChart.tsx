"use client"

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

export default function SpectrumBarChart({ data }: Props) {
  return (
    <div className="w-full h-64 bg-white p-4 rounded-xl border border-spectrum-border">
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