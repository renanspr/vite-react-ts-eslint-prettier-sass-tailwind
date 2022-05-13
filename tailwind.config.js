// Tailwindcss configuration file
// https://tailwindcss.com/docs/configuration
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const flattenColorPalette =
  require('tailwindcss/lib/util/flattenColorPalette').default
const tailwindBootstrapGrid = require('tailwind-bootstrap-grid')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },

    extend: {},
  },
  plugins: [
    // https://github.com/karolis-sh/tailwind-bootstrap-grid
    tailwindBootstrapGrid({
      gridGutterWidth: '20px',
      containerMaxWidths: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
      },
    }),

    // Border variants
    // eslint-disable-next-line no-unused-vars
    ({ addUtilities, _e, theme, variants }) => {
      const colors = flattenColorPalette(theme('borderColor'))

      delete colors.default

      const colorMap = Object.keys(colors).map((color) => ({
        [`.border-t-${color}`]: { borderTopColor: colors[color] },
        [`.border-r-${color}`]: { borderRightColor: colors[color] },
        [`.border-b-${color}`]: { borderBottomColor: colors[color] },
        [`.border-l-${color}`]: { borderLeftColor: colors[color] },
      }))

      const utilities = Object.assign({}, ...colorMap)

      addUtilities(utilities, variants('borderColor'))
    },
  ],
}
