const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-600": "#E07306",
      "primary-500": "#C24E0A",
      "primary-400": "#A53C12",
      "secondary-500": "#1B1F2C",
      "secondary-400": "#212530",
      "secondary-300": "#3A3E4B",
    },
    extend: {
      keyframes: {
        fadeRight: {
          "0%, 100%": {
            opacity: "0",
            transform: "translateX(4rem)",
          },
          "10%, 90%": {
            opacity: "1",
            transform: "translateX(0rem)",
          },
        },
      },
      animation: {
        "fade-right": "fadeRight ease-in-out 5s",
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
