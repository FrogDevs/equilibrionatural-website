/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '256': '38rem',
      }
    },
  },
  plugins: [],
}