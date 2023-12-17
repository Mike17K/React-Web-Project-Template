/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': 'E52A30',
        'primary-black': '220607',
      }
    },
  },
  plugins: [],
}