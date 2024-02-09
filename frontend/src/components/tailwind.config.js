/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'white':'#FFF7E9',
      'black':'#A29D95',
      'orange':'#DE5F3B',
      'grey':'#0000001F',
      'gray':'#D9D9D9',
      'blu':'#075DFE',
      'margin':'#000000',
      'whit':'#EFF1F3',
      'wite':'#FFFFFF80',
    },
    screens: {
      'sm': {'max': '680px'},
      'md': {'max':'955px'},
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

