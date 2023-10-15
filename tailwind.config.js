/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter"],
      },
      backgroundImage: {
        "dark-mobile": "url('/src/assets/bg-mobile.jpg')",
        "light-mobile": "url('/src/assets/bg-mobile-light.jpg')",
        "sun-icon": "url('/src/assets/sun.svg')",
        "moon-icon": "url('/src/assets/MoonStars.svg')",
      },
    },
  },
  plugins: [],
};
