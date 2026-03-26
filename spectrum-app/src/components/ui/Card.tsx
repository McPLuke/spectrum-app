import { ReactNode } from "react"

/*type CardProps = {
  children: ReactNode
}*/

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-spectrum-surface border border-spectrum-border rounded-xl p-6 shadow-sm hover:shadow-md transition">
      {children}
    </div>
  )
}