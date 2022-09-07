/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['"Amatic SC"', 'cursive']
    },
    extend: {
      colors:{
        orange: {
          500: '#FF6247',
          400: '#f54e31'
        },
        yellow: {
          500: '#EbAA3B'
        }
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        'bounce-short': 'bounce 1200ms ease-in-out 0.5'
      }

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

// CREATE BRAND GRADIENT COLOR PALLETE