/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eGreen': '#10D48E',
        'eDarkBlue': '#132A3A',
        'eWhite': '#FFFFFF',
        'eGray': '#2D2D2D'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

