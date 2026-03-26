import Nav from "./Nav"

export default function Header() {
  return (
    <header className="border-b border-spectrum-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-spectrum-text">Spectrum</h1>
        <Nav />
      </div>
    </header>
  )
}