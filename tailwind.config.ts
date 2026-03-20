import type { Config } from "tailwindcss";

const config: Config = {
 content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Se o erro persistir, removemos o safelist daqui e pomos no globals.css 
  // Mas tenta primeiro assim:
  theme: {
    extend: {
      colors: {
        brand: {
          soft: "#F8F5F2",
          dark: "#382622",
          accent: "#59310b",
          marble: {
            start: "#F8F5F2",
            middle: "#E8E2DC",
            end: "#D8D2CC",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} as Config; // Adicionamos o "as Config" aqui no final

export default config;