/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./disk/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        swipeUp: {
          '0%': {transform: 'translateY(50px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'},
        },
      },
      animation: {
        swipeUp: 'swipeUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}

