import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#FF7A00",

        primary: "hsl(var(--primary))",
        secondary: "#E63946",
        accent: "#4CAF50",
        background: "#FFF5E8",
        textmain: "#3A2E2A",
        navbar: "#662584",
      },
    },
  },
  plugins: [],
}

export default config