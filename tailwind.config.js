/**
 * TailwindCSS config file.
 */

module.exports = {
  purge: {
    enabled: true,
    content: [ './**/**/*.js' ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '50br': '50px',
      },
      borderWidth: {
        '3bw': '3px',
      },
      fontSize: {
        '22fz': '22px',
        '25fz': '25px',
        '44fz': '44px',
      },
      height: {
        '80h': '80px',
        '100h': '100px',
      },
      spacing: {
        '5s': '5px',
      },
      width: {
        '100w': '100px',
        '200w': '200px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
