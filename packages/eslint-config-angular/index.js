module.exports = {
  extends: [
    '@yoo-digital/eslint-config-base',
    'plugin:@angular-eslint/recommended',
    'plugin:rxjs/recommended',
  ],
  plugins: [
    '@angular-eslint/eslint-plugin',
    'rxjs',
    'rxjs-angular',
  ],
  rules: {
    'no-underscore-dangle': [
      'error',
      {
        'allowAfterThis': true,
      },
    ],
    'class-methods-use-this': 'off',
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: [],
        style: 'kebab-case',
      },
    ],
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
    '@angular-eslint/no-pipe-impure': 'error',
    '@angular-eslint/no-queries-metadata-property': 'error',
    '@angular-eslint/prefer-output-readonly': 'error',
    '@angular-eslint/relative-url-prefix': 'error',
    '@angular-eslint/use-injectable-provided-in': 'error',
    '@angular-eslint/prefer-standalone-component': 'warn',
    'rxjs/finnish': 'warn',
    'rxjs/no-ignored-observable': 'warn',
    'rxjs/no-exposed-subjects': [
      'warn',
      {
        'allowProtected': true,
      },
    ],
    'rxjs-angular/prefer-takeuntil': 'error',
  },
  overrides: [
    {
      files: [
        '*.ts',
      ],
      extends: [
        'plugin:@angular-eslint/template/process-inline-templates'
      ],
    },
    {
      files: [
        '*.html',
      ],
      extends: [
        'plugin:@angular-eslint/template/recommended'
      ],
      rules: {
        '@angular-eslint/template/prefer-control-flow': 'error',
        '@angular-eslint/template/no-interpolation-in-attributes': 'error',
        '@angular-eslint/template/no-duplicate-attributes': 'error',
        '@angular-eslint/template/attributes-order': [
          'error',
          {
            order: [
              'STRUCTURAL_DIRECTIVE',
              'TEMPLATE_REFERENCE',
              'ATTRIBUTE_BINDING',
              'INPUT_BINDING',
              'TWO_WAY_BINDING',
              'OUTPUT_BINDING'
            ],
          },
        ],
        '@angular-eslint/template/prefer-self-closing-tags': 'error',
      },
    },
  ],
};
