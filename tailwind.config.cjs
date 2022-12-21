/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/*.tsx", "./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      white: "#fff",

      "gray-200": "#E9EBEE",
      "gray-600": "#999A9B",
      "gray-700": "#737375",
      "gray-900": "#1C1C1C",

      "green-100": "#A3F9B9",
      "green-400": "#40B25C",
      "green-600": "#1E9631",

      "pink-100": "#FFCAE0",
      "red-500": "#DA4B4F",
      "red-600": "#C22539",
    },
    extend: {},
  },
  plugins: [],
};
