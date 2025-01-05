/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'bt-lg': '992px',
      },
      colors: {
        mainGreen: '#63ab45',
        mainOrange: '#fbb03b',
      },
    },
  },
  plugins: [],
  prefix: '',
};
