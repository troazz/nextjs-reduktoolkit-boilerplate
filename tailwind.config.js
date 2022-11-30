module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif']
      }
    },
    container: {
      center: true,
    },
    colors: {
      primary: '#111D27',
      secondary: '#F53441',
      red: {
        800: '#AE111B',
      },
      blue: {
        500: '#1896DD',
      },
      gray: {
        400: '#E1DDDD',
        500: '#9BA4BA',
        600: '#6F7981',
        800: '#303B44',
      },
      white: {
        100: '#FFFFFF',
        200: '#F5F7F9',
        400: '#F1F1F1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('precss'),
    require('autoprefixer')
  ],
}
