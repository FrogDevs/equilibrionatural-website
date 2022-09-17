/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero-img.jpg')",
        'about-prev': "url('/about-prev.jpg')",
        'message': "url('/message.jpg')"
      },
      spacing: {
        '128': '32rem',
        '256': '38rem',
      }
    },
  },
  plugins: [],
}