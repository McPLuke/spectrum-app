import Link from "next/link"
import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary"
}

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded text-sm font-medium transition"

  const variants = {
  primary:
    "bg-spectrum-primary text-white hover:opacity-90",
  secondary:
    "bg-white border border-spectrum-border hover:bg-gray-50",
  }

  const className = `${baseStyles} ${variants[variant]}`

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return <button className={className}>{children}</button>
}