/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      fontFamily: {
        actor: ['"Actor"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

