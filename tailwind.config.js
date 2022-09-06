/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bulevar: ["Bulevar Regular"],
        bulevarp: ["Bulevar Poster"],
      },
    },
  },
  plugins: [
      require('tailwind-scrollbar-hide'),
      require('@tailwindcss/forms'),
  ],
}
