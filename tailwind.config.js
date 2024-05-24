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
      fontSize: {
        'responsive-lg': 'clamp(1.5rem, 2vw + 1rem, 3rem)',
        'responsive-md': 'clamp(1rem, 1.5vw + 1rem, 2rem)',
        'responsive-sm': 'clamp(0.875rem, 1vw + 0.7rem, 1.5rem)',
        'responsive-9xl': 'clamp(4rem, 8vw + 2rem, 9rem)',
      },
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

