/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      grey: "hsl(0, 0%, 63%)",
      black: "hsl(0, 0%, 0%)",
      white: "hsl(0,0%,100%)",
      darkGrey: "hsl(0, 0%, 27%)",
    },
    extend: {
      screens: {
        '1xl': '1440px'
      },
      animation: {
        fade: 'fade 3s ease forward'
      },
      keyframes: {
        fade: {
          from: {
            opacity: '0',
            background: 'transparant'
          },
          to: {
            opacity: '1',
            background: 'white'
          }
        }
      }
    },
  },
  plugins: [],
};
