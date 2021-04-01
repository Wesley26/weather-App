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
        '36fz': '36px',
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
