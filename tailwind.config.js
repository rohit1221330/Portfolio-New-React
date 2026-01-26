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
      animation: {
        'grid-flow': 'grid-flow 20s linear infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'grid-flow': {
          '0%': { transform: 'perspective(500px) rotateX(60deg) translateY(0)' },
          '100%': { transform: 'perspective(500px) rotateX(60deg) translateY(4rem)' },
        },
      },  
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans], // Add this line
        poppins: ['Poppins', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
    }
  },
  plugins: [],
}