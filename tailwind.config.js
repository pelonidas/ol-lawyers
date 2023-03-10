const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      screens: {
        xl: '1280px',
      },
      center: true,
      padding: {
        DEFAULT: '2rem',
        xl: 0,
      },
    },
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', ...defaultTheme.fontFamily.serif],
        raleway: ['var(--font-raleway)', ...defaultTheme.fontFamily.sans],
        lato: ['var(--font-lato)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#1E2D3D',
        primaryDarker: '#192633',
        secondary: '#E65E77',
      },
    },
  },
  plugins: [],
};
