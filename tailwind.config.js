/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: '930px',
        lg: '1200px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}
