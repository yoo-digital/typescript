module.exports = {
  extends: [
    '@yoo-digital/eslint-config-base',
  ],
  plugins: [
    '@angular-eslint/eslint-plugin',
    '@typescript-eslint/tslint',
    'rxjs',
  ],
  rules: {
    '@angular-eslint/component-class-suffix': 'error',
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: [],
        style: 'kebab-case',
      },
    ],
    '@angular-eslint/contextual-lifecycle': 'error',
    '@angular-eslint/directive-class-suffix': 'error',
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        prefix: [],
        style: 'camelCase',
      },
    ],
    '@angular-eslint/no-attribute-decorator': 'error',
    '@angular-eslint/no-forward-ref': 'error',
    '@angular-eslint/no-host-metadata-property': 'error',
    '@angular-eslint/no-input-rename': 'error',
    '@angular-eslint/no-inputs-metadata-property': 'error',
    '@angular-eslint/no-output-on-prefix': 'error',
    '@angular-eslint/no-output-rename': 'error',
    '@angular-eslint/no-outputs-metadata-property': 'error',
    '@angular-eslint/no-pipe-impure': 'error',
    '@angular-eslint/use-lifecycle-interface': 'error',
    '@angular-eslint/use-pipe-transform-interface': 'error',
    'rxjs/no-ignored-observable': [ 'warn' ],
    'rxjs/no-exposed-subjects': [ 'warn' ],
    '@typescript-eslint/tslint/config': [
      'error',
      {
        rules: {
          'import-destructuring-spacing': true,
          'number-literal-format': true,
          'template-use-track-by-function': true,
        },
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        'allowAfterThis': true,
      },
    ],
  },
};
