module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~components': './components',
          '~redux': './redux',
          '~screens': './screens',
          '~assets': './assets',
          '~utils': './utils.js',
          '~constants': './constants.js',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
