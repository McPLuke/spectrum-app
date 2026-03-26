import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spectrum: {
          bg: "#F7F9FB",
          surface: "#FFFFFF",
          primary: "#4A6FA5",
          secondary: "#7AA6C2",
          accent: "#A3C4BC",
          text: "#1F2933",
          muted: "#6B7280",
          border: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
}

export default config