/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#6C584C',
      secondary: '#A98467',
      tertinary: '#ADC178',
      green1: '#DDE5B6',
      green2: '#F7F4E8'
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero-pattern.avif')"
      }
    }
  },
  plugins: []
}
