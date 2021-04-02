/**
 * TailwindCSS config file.
 */

module.exports = {
  purge: {
    enabled: false,
    content: [ '' ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '22fz': '22px',
        '44fz': '44px',
      },
      width: {
        '100w': '100px',
      },
      height: {
        '100h': '100px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
