/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./disk/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        swipeUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceEffect: {
          // New bounce animation keyframes
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(10px)" },
          "75%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        swipeUp: "swipeUp 0.8s ease-out forwards",
        "bounce-three": "bounceEffect 0.5s ease-out 11", 
      },
    },
  },
  plugins: [],
};

