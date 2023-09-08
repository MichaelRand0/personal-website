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
          "0%, 100%": { "background-position": "0, 0" },
          "10%": { "background-position": "-5%, -10%" },
          "20%": { "background-position": "15%, 5%" },
          "30%": { "background-position": "7%, -25%" },
          "40%": { "background-position": "20%, 25%" },
          "50%": { "background-position": "-25%, 10%" },
          "60%": { "background-position": "15%, 5%" },
          "70%": { "background-position": "0%, 15%" },
          "80%": { "background-position": "25%, 35%" },
          "90%": { "background-position": "-10%, 10%" },
        },
        showDown: {
          "0%": { height: "0%", transform: "translateY(0%)" },
          "50%": { height: "100%", transform: "translateY(0%)" },
          "100%": { height: "100%", transform: "translateY(100%)" },
        },
        scrollTop: {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        scrollBottom: {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        },
        hide: {
          "0%": {
            top: '0px'
          },
          "100%": {
            top: '-300vh'
          },
        },
        jumping: {
          "0%": {
            transform: 'translateY(0%)'
          },
          "50%": {
            transform: 'translateY(30%)'
          },
          "100%": {
            transform: 'translateY(0%)'
          },
        }
      },
      animationDelay: {
        "2s": "2s",
        "3s": "3s",
        "4s": "4s",
        "5s": "5s",
        "1500": "1500ms",
        "2800": "2800ms",
        "3100": "3100ms",
        "2500": "2500ms",
        "3500": "3500ms",
      },
      animationDuration: {
        "1500": "1500ms",
        "2s": "2s",
        "3s": "3s",
        "4s": "4s",
        "5s": "5s",
      },
    },
    animation: {
      grain: "grain .2s steps(10) infinite",
      showDown: "showDown ease-in-out 1",
      scrollTop: "scrollTop ease-out 1",
      scrollBottom: "scrollBottom ease-out 1",
      hide: "hide 1s linear 1",
      jumping: "jumping 1s linear infinite"
    },
    colors: {
      brand: "#4bffa5",
      bgBlack: "#101010",
      grey: "#b0b0b0",
      greyLight: '#b0b0b033',
      greyStrong: "#1e1e1e",
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
