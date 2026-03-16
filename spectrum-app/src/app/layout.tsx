import "./globals.css"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: "Spectrum",
  description: "Self-representation profiles for the autistic spectrum"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="p-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}