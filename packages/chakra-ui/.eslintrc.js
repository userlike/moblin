module.exports = {
  extends: [
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['simple-import-sort'],
  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
