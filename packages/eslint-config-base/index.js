module.exports =  {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: [
    // Configuration is documented here: https://github.com/airbnb/javascript
    // Rules can be found here:
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    project: [
      './tsconfig.json',
    ],
    tsconfigRootDir: './',
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.ts'],
      },
    },
  },
  rules: {
    '@typescript-eslint/array-type': [
      'error',
      {
        'default': 'array'
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        'allowTypedFunctionExpressions': true
      },
    ],

    // note you must disable the base rule as it can report incorrect errors
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],

    // note you must disable the base rule as it can report incorrect errors
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],

    // note you must disable the base rule as it can report incorrect errors
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // note you must disable the base rule as it can report incorrect errors
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/member-ordering': ['warn', {
      default: {
        memberTypes: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-decorated-field',
          'protected-decorated-field',
          'private-decorated-field',
          'public-field',
          'protected-field',
          'private-field',
          'constructor',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-method',
          'protected-method',
          'private-method',
          'private-instance-method',
          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method',
        ],
      },
    }],
    'complexity': ['warn', 10],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.storybook/**',
          'stories/**',
          "**/*.test.*",
          '**/*.spec.*',
        ],
      },
    ],
    'max-depth': ['warn', 3],
    'max-lines-per-function': ['warn', {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
    }],
    'no-await-in-loop': 'error',
    'no-useless-rename': 'error',
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],

    // reduce the severity to warn since there are valid use cases
    'no-restricted-syntax': ['warn'],

    // It is disabled because of a known issue causing issues in barrel files
    // See: https://eslint.org/docs/latest/rules/no-restricted-exports#known-limitations
    'no-restricted-exports': ['off'],

    // See Guild Protocol:
    // https://yooapps.jira.com/wiki/spaces/FD/blog/2021/02/08/2647359596/Frontend+Guild+-+03.02.2021
    'no-plusplus': 'off',

    // note you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: [
        '.storybook/**',
        'stories/**',
        '**/*.stories.*',
        "**/*.test.*",
        '**/*.spec.*',
      ],
      rules: {
        'max-lines-per-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
