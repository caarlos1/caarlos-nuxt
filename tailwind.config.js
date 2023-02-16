const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js,vue,ts,scss}",
    "./layouts/**/*.{vue,scss}",
    "./pages/**/*.{html,vue,scss}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      "color-text": "#ebebeb",
      "color-bg-1": "#20232a",
      "color-bg-2": "#15181e",
      "color-primary": "#128bfc",
      "color-primary-2": "#0271d9",
      "color-secondary": "#2f3237",
      "color-secondary-2": "#232529",
    },
  },
  plugins: [],
};
