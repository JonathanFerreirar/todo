/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      monse: ["var(--font-monse)"],
      lexend: ["var( --font-lexend)"],
    },
    colors: {
      primary: {
        red: "#A31111",
        redLight: "#F55252",
        green: "#0C2D00",
        grey: "#545454",
        greyDark: "#282828",
        greNew: "#404040",
        light: "#FAFAFA",
        dark: "#252525",
      },
    },
  },
  plugins: [],
};

