module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
      boxShadow: {
        '10xl': '4.2px 8.5px 8.5px hsl(0deg 0% 0% / 0.37);',
      }
    },
    minWidth: {
     
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
     
    },
  },
  variants: {     // default    small           medium          large           xl                2xl               3xl             4xl             
    extend: {}, // bg-white sm:bg-red-600 md:bg-gray-600 lg:bg-yellow-300 xl:bg-green-500 2xl:bg-cyan-400 3xl:bg-indigo-600 4xl:bg-violet-800">
    screens: {
                        // PINK     phone
      'sm': '640px',    // RED                                   
      'md': '768px',    // GRAY                                           
      'lg': '1024px',   // YELLOW   everything is good except nav bar and featured posts         
      'xl': '1280px',   // GREEN    Coding monitor
      '2xl': '1440px',  // BLUE     REGULAR MONITORs 2xl often controls the green for some odd reason  is this ever rendered? REGULAR MONITOR
      '3xl': '1536px',  // INDIGO   is this ever rendered?
      '4xl': '1760px',  // VIOLET   is this ever rendered?
     
    }
  },
  plugins: [],

};
