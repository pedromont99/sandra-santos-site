import type { Config } from "tailwindcss";

const config: Config = {
 content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          soft: "#1C1C1E",
          dark: "#F2EDE4",
          accent: "#8C6D3F",
          marble: {
            start: "#1C1C1E",
            middle: "#E8E2DC",
            end: "#D8D2CC",
          }
        },
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
} as Config;

export default config;