/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#33A8DB',
        'secundary':  '#1472B7',
      },
      fontFamily: {
        'sans': ['"Raleway"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage:{
        'hero-pattern': "url('./assets/images/banner.png')",
        'transformWorld-pattern': "url('./assets/images/woman-code.png')"
      }
    },
  },
  plugins: [],
}

