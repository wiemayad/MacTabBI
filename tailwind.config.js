/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'rouge':'#CB0101'
      },
      backgroundImage:{
        'conference': 'url(src/img/mactabbi/conference3.png)'
      }
    },
  },
  plugins: [],
}

