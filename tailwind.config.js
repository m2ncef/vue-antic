/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      bg: '#F1F1F1',
      bigTitle: "#151517",
      titlesYellow: "#EEBF63",
      lightGray: "#828282",
      darkGray: "#2F2F2F",
    },
    spacing: {
      desktop: "10vw",
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'libre': ['Libre Franklin', 'sans-serif'],
    }
  },
  plugins: [],
}

