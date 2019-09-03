module.exports =  {
  parser: '@typescript-eslint/parser',
  extends: [
    // Configuration is documented here: https://github.com/airbnb/javascript
    // Rules can be found here:
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    'airbnb',
    '@yoo-digital/eslint-config-base',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.ts', '.tsx'] },
    ],
  },
};
