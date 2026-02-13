/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      fontSize: {
        h3: ['20px', { lineHeight: '26px' }],
        p1: ['11px', { lineHeight: '16px' }],
      },
    },
  },
  plugins: [],
}
