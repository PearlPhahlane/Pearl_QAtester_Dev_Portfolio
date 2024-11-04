/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./disk/**/*.{html,js}"],
  theme: {
    extend: {},
    animation: {
      gradient: 'gradient 5s ease infinite'
    }
    keyframes: {
      gradient: {
        '0%': {backgroundPosition: 0% 50% },
        '100%': {backgoundPosition: '100% 50%'}
      }
    }
  },
  plugins: [],
};

