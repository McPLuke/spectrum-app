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
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "border border-gray-300 hover:bg-gray-100",
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