/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#F0F0F0',
     'secondary': 'var(--primary-900, #5D5FEF)',
     'danger': '#e3342f',
     "body" : "#FAFBFC",
     'Titulo' : "var(--color-white, #FFF);",
      "notifica" :"var(--supporting-color-yellow-shade, #FFFAF1)",
      "quadro1" : "#FFE2E5;",
      "quadro2" : "#FFF4DE",
      "quadro3" : "var(--colors-green-100, #DCFCE7);",
      "variacao1" : "var(--colors-light-blue-50, #F0F9FF)", 
      "variacao2" : "var(--colors-green-50, #F0FDF4);", 
      "variacao3" : "var(--supporting-color-violet-shade, #FBF1FF)", 
      "variacao4" : "var(--supporting-color-yellow-shade, #FEF6E6)"
      }),
    fontFamily: {
      Poppins:  ["Poppins"],
    },
    
    letterSpacing: {
      tightest: '-2.6px',
      smal: '-0.8px',
    },
    colors: {
      'primary': 'var(--greys-blue-grey-700, #737791)',
      'secondary' : 'var(--color-white, #FFF)',
      'Titulo' : 'var(--greys-blue-grey-900, #151D48);',
      'sign' : "#8D1C1C" , 
      "information" : "var(--primary-800, #4079ED)",
      "quadros" : "var(--primary-dark-shade, #05004E)",
      "table" : "#96A5B8;",
      "linhas" : "var(--greys-blue-grey-800, #444A6D)"
    },
    boxShadow: {
      '3xl': '0px 4px 20px 0px rgba(238, 238, 238, 0.50);',
    }
  },
  
  plugins: [],
}

