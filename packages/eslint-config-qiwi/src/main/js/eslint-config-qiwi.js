module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'standard-qiwi',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
    'plugin:array-func/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'react-hooks',
    'optimize-regex',
    'sonarjs',
    'unicorn',
    'simple-import-sort',
  ],
  rules: {
    'eslint/no-unused-vars': 0,
    'optimize-regex/optimize-regex': 'warn',
    'prefer-exponentiation-operator': 'error',
    'react/prop-types': 0,
    'react/display-name': 0,
    'unicorn/better-regex': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'off',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-keyword-prefix': 'off',
    'no-nested-ternary': 'off',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-null': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-dataset': 'error',
    'unicorn/prefer-event-key': 'error',
    'unicorn/prefer-flat-map': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',
    'array-func/prefer-array-from': 0,
    'sonarjs/cognitive-complexity': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'no-return-await': 'error',
    '@typescript-eslint/ban-ts-comment': 0,
    'simple-import-sort/imports': 'error',
    'comma-dangle': [
      'error', {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
  },
  globals: {
    Cypress: 'readonly',
    cy: 'readonly',
    it: 'readonly',
    expect: 'readonly',
    describe: 'readonly',
    fetch: 'readonly',
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 9,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
    }
  ]
}
