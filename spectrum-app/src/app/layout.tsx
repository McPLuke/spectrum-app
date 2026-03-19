import "./globals.css"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Container from "@/components/ui/Container"

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

        <Container>
          {children}
        </Container>

        <Footer />
      </body>
    </html>
  )
}