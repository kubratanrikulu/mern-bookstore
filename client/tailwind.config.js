/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ebGaramond: ['"EB Garamond"', "sans-serif"],
        raleway: ['"Raleway"', "sans-serif"],
      },
      colors: {
        primary: "#f86d72",
        h1Color: "#2b2b2b",
        pColor: "#909090",
        footerText: "#666"
      },
    },
  },
  plugins: [],
}