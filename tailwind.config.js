/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lemonMilk: ['"Lemon Milk"', 'sans-serif'],
        curvy: ['Dancing Script', 'cursive'], 
        dancing: ['Dancing Script', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        greatVibes: ['Great Vibes', 'cursive'],
        satisfy: ['Satisfy', 'cursive'],
        lobster: ['Lobster', 'cursive'],// Custom font family
      },
    },
  },
  "animation": {
    shimmer: "shimmer 2s linear infinite"
  },
  "keyframes": {
    shimmer: {
      from: {
        "backgroundPosition": "0 0"
      },
      to: {
        "backgroundPosition": "-200% 0"
      }
    }
  },
  plugins: [],
}
