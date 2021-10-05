module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:react-hooks/recommended', 'prettier'],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint/eslint-plugin',
    'testing-library',
    'simple-import-sort',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
