module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        Puritan: ['Puritan', 'sans-serif'],
      },
      height: {
        mydisplay: '664px',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        secondary: 'rgba(0, 0, 0,0.1)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
