import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spectrum: {
          bg: "var(--bg)",
          surface: "var(--surface)",
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          accent: "var(--accent)",
          text: "var(--text)",
          muted: "var(--muted)",
          border: "var(--border)",
        },
      },
    },
  },
  plugins: [],
}

export default config