module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { 
        orange: '#ff4500',
        darkDarkBlue: '#1d2535'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
