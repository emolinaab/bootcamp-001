module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './components',
          '@redux': './redux',
          '@utils': './utils.js',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
