module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    '@react-native-community',
    'plugin:import/warnings',
    'plugin:import/errors',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  plugins: ['import'],
};
