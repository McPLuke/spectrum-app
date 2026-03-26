import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {children}
    </div>
  )
}