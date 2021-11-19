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
        primary: 'rgba(236, 72, 153,0.1)',
        secondary: 'rgba(131, 24, 67,0.1)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
