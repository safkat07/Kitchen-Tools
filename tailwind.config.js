/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#FFF2E1",
      "secondary": "#D1BB9E",
      "textPrimary": "#4E4437",
      "textSecondary": "#FFF2E1",
    },
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

