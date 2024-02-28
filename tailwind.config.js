/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      keyframes:{
        'menu-open': {
          '0%': {transform: 'scale(1)'},
          '80%':{transform: 'scale(1.2)'},
          '100%':{transform: 'scale(1)'},
        }
      },
      animation:{
        'menu-open': 'menu-open 0.2s ease-in-out',
      }
    },
  },
  plugins: [],
}

