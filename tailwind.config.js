/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orangish-black': '#252422',
        'gray-300': '#D0D5DD',
        'gray-2': '#A3A3A3',
        'black': '#03061F',
        'orange': '#EB5E28',
      },
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
