/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'serif'],
      },
      colors: {
        'black': '#000000',
        'secondary': '#7E7E7E',
        'primary': '#2EBB77',
      },
    },
  },
  plugins: [],
}
