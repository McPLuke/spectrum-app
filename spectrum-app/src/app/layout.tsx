import "./globals.css";

export const metadata = {
  title: "Spectrum",
  description: "Self-representation profiles for the autistic spectrum"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 border-b">
          <h1 className="text-xl font-semibold">Spectrum</h1>
        </header>

        <main className="p-6">{children}</main>

        <footer className="p-4 border-t text-sm">
          Spectrum Project
        </footer>
      </body>
    </html>
  );
}
