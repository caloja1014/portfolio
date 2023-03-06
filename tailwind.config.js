/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-sans-pro': ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      }
    },
    colors:{
      primary: '#0A192F',
      secondary: '#3A948A',
      tertiary: '#CCD6F6',
      quaternary: '#8892B0',
      quinary: '#828DAA',
    }
  },
  plugins: [],
}
