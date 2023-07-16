/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96', // 240,86,199
        primaryDark: '#58E6D9', // 80,230,217
        bothColor: '#777777',
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
        circularLight:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)',

        circularDark:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)',

        circularLightLg:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)',

        circularDarkLg:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)',

        circularLightMd:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)',

        circularDarkMd:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)',

        circularLightSm:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 4px,#f5f5f5 5px,#f5f5f5 40px)',

        circularDarkSm:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 4px,#1b1b1b 8px,#1b1b1b 40px)',
      },
      screens: {
        xs: '450px',
      },
      boxShadow: {
        '3xl': '0 15px 15px 1px rgba(80,230,217, 0.4)',
      },

      backgroundColor: [
        '#121212',
        'rgba(131,58,180,1)',
        'rgba(253,29,29,1)',
        'rgba(252,176,69,1)',
        'rgba(131,58,180,1)',
        '#121212',
      ],
    },
  },
  plugins: [],
};
