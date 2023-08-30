import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        dots: "url('/img/dots-bg.png')",
      },
      keyframes: {
        grain: {
          "0%, 100%": { 'background-position': "0, 0" },
          "10%": { 'background-position': "-5%, -10%" },
          "20%": { 'background-position': "15%, 5%" },
          "30%": { 'background-position': "7%, -25%" },
          "40%": { 'background-position': "20%, 25%" },
          "50%": { 'background-position': "-25%, 10%" },
          "60%": { 'background-position': "15%, 5%" },
          "70%": { 'background-position': "0%, 15%" },
          "80%": { 'background-position': "25%, 35%" },
          "90%": { 'background-position': "-10%, 10%" },
        },
      },
    },
    animation: {
      grain: "grain .2s steps(10) infinite",
    },
    colors: {
      brand: "#4bffa5",
      bgBlack: "#101010",
      grey: "#888888",
      greyStrong: "#1e1e1e",
    },
  },
  plugins: [],
}
export default config
