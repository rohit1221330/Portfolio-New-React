const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: '',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans], // Add this line
        poppins: ['Poppins', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
    }
  },
  plugins: [],
}