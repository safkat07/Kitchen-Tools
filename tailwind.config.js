/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "title": ["Saira Stencil One", "sans-serif"],
        "primary": ["Lilita One", "sans-serif"],
        "secondary": ["Londrina Solid", "sans-serif"],
        "secondaryOutline": ["Londrina Outline", "sans-serif"],
      }
    },
  },
  plugins: [],
}

