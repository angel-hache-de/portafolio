/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "back": "rgb(24 24 27)",
        "base": "#121212",
        "highlight": "#1a1a1a",
        "elevated-base": "#242424",
        "elevated-highlight": "#2a2a2a",
        "third": "#a548a2"
      }
    },
  },
  plugins: [],
}
