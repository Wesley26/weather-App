/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        '50br': '50px',
      },
      borderWidth: {
        '3bw': '3px',
      },
      fontSize: {
        '20fz': '20px',
        '22fz': '22px',
        '25fz': '25px',
        '44fz': '44px',
      },
      height: {
        '80h': '80px',
        '100h': '100px',
      },
      spacing: {
        '5s': '5px',
      },
      width: {
        '100w': '100px',
        '200w': '200px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
