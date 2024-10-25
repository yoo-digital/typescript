import { FlatCompat } from '@eslint/eslintrc';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import typescript from './typescript.mjs';

const compat = new FlatCompat();

export default tseslint.config(
  ...compat.extends('eslint-config-airbnb'),
  ...typescript,
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...react.configs.flat['jsx-runtime'],
    rules: {
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.ts', '.tsx'],
        },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',

      /**
       * Allow different syntaxes for function components:
       * - Arrow functions for normal use case
       * - Generic functions for generic components
       */
      'react/function-component-definition': 'off',

      /**
       * Unfortunately the eslint-plugin-react does not work well with TypeScript.
       * It does not identify the explicit type given to the FC or map function.
       * Because of this, the rule has to be turned off completely.
       *
       * See: https://github.com/yannickcr/eslint-plugin-react/issues/1461
       *      https://github.com/yannickcr/eslint-plugin-react/issues/2353
       *      https://github.com/yannickcr/eslint-plugin-react/issues/2396
       */
      'react/prop-types': 'off',

      // Turning off due to Prettier clash
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-wrap-multilines': 'off',
      'react/jsx-closing-tag-location': 'off',
    },
  },
  /**
   * Unfortunately there is no way of avoiding the rule "max-lines-per-function"
   * for functional components (or any render function).
   * This override is not perfect, as it ignores all other functions declared in
   * the listed directories as well...
   *
   * See: https://github.com/eslint/eslint/issues/12236
   */
  {
    files: ['src/components/**', 'src/hooks/**', 'src/pages/**', 'src/layouts/**'],
    rules: {
      'max-lines-per-function': 'off',
    },
  },
);
