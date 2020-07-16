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

    'react/jsx-props-no-spreading': 'off',
  },
  overrides: [
    /**
     * Unfortunately there is no way of avoiding the rule "max-lines-per-function"
     * for functional components (or any render function).
     * This override is not perfect, as it ignores all other functions declared in
     * the listed directories as well...
     *
     * See: https://github.com/eslint/eslint/issues/12236
     */
    {
      files: [
        'src/components/**',
        'src/hooks/**',
        'src/pages/**',
        'src/layouts/**',
      ],
      rules: {
        'max-lines-per-function': 'off',
      },
    },
  ],
};
