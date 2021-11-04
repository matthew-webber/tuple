module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: {opacity: 0},
          to: {opacity: 1},
        },
        fadeOut: {
          from: {opacity: 1},
          to: {opacity: 0},
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeOut: 'fadeOut .2s ease-in forwards',
      },
    },
  },
  variants: {
    animation: ['motion-safe'],
  },
  plugins: [],
}
