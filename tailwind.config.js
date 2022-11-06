/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-blue': '#0066CC',
        'apple-white' : '#f5f5f7',
        'apple-gray' : '#6e6e73'
      },
      fontSize: {
        'small' : '12px',
        'medium' : '14px',
        'big' : '17px'
      },
    },
  },
  plugins: [],
}