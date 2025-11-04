/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rbbc-red': '#DC2626',
        'rbbc-red-dark': '#991B1B',
        'rbbc-red-light': '#FEE2E2',
      },
      fontFamily: {
        'display': ['Oswald', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'body': ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'bebas-bold': '900',
      },
    },
  },
  plugins: [],
}

