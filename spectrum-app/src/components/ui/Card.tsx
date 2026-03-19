import { ReactNode } from "react"

type CardProps = {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className="border rounded-lg p-5 shadow-sm bg-white">
      {children}
    </div>
  )
}