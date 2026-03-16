import Nav from "./Nav"

export default function Header() {
  return (
    <header className="border-b p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Spectrum</h1>
        <Nav />
      </div>
    </header>
  )
}