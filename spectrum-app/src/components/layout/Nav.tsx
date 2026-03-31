import Link from "next/link"

export default function Nav() {
  return (
    <nav className="flex gap-6 text-sm text-spectrum-muted">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <a href="/profile/share">Share Profile</a>
      <Link href="/questionnaire">Questionnaire</Link>
      <Link href="/settings">Settings</Link>
    </nav>
  )
}