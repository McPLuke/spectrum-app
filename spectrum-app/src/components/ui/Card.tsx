import { ReactNode } from "react"

type CardProps = {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-spectrum-surface border border-spectrum-border rounded-xl p-6 shadow-sm">
      {children}
    </div>
  )
}