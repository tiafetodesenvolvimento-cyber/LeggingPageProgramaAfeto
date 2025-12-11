/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'afeto-primary': '#14d9b5',
        'afeto-secondary': '#10a98f',
        'afeto-light': '#e0fbf7',
      },
    },
  },
  plugins: [],
}


