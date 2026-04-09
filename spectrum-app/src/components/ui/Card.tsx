import { ReactNode } from "react"

/*type CardProps = {
  children: ReactNode
}*/

// A reusable Card component that provides a consistent style for displaying content in a card format.
//  It includes padding, border, rounded corners, and a subtle shadow effect on hover.
export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-spectrum-surface border border-spectrum-border rounded-xl 
    p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      {children}
    </div>
  )
}