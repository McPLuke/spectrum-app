import "./globals.css"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Container from "@/components/ui/Container"
import FadeIn from "@/components/ui/FadeIn"

export const metadata = {
  title: "Spectrum",
  description: "Self-representation profiles for the autistic spectrum"
}

// The RootLayout component defines the overall structure of the Spectrum application,
//  including the header, footer, and main content area. 
// It wraps all pages and ensures a consistent layout across the app.
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
          <FadeIn>
            {children}
          </FadeIn>
        </Container>

        <Footer />
      </body>
    </html>
  )
}