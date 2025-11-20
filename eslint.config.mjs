import eslintjs from '@eslint/js'
import eslintReactAll from 'eslint-plugin-react/configs/all.js'
import globals from 'globals'

export default [
  {
    ignores: [
      'coverage/',
      'public/',
      'tmp/',
      'storage/',
      'app/assets/javascripts/',
      'babel.config.js',
      'postcss.config.js'
    ]
  },
  eslintjs.configs.all,
  eslintReactAll,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'array-element-newline': ['error', 'consistent'],
      'arrow-parens': ['error', 'as-needed'],
      'camelcase': ['off', { properties: 'always' }], // Change
      'comma-dangle': ['error', 'never'],
      'curly': ['error', 'multi-or-nest'],
      'dot-location': ['error', 'property'],
      'func-call-spacing': ['error', 'never'],
      'function-call-argument-newline': ['error', 'consistent'],
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'line-comment-position': 'off',
      'max-len': ['error', { code: 110, ignorePattern: 'className="[^"]+"' }],
      'max-lines': 'off',
      'multiline-ternary': ['error', 'never'],
      'newline-per-chained-call': 'off',
      'nonblock-statement-body-position': ['error', 'below'],
      'no-inline-comments': 'off',
      'no-empty-function': 'error',
      'no-extra-parens': ['error', 'all', {
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
        nestedBinaryExpressions: false
      }],
      'no-shadow': 'error',
      'no-ternary': 'off',
      'no-throw-literal': 'error',
      'no-undef': 'off',
      'no-undefined': 'error',
      'object-curly-spacing': ['error', 'always'],
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      'one-var': 'off',
      'padded-blocks': ['error', 'never'],
      'quotes': ['error', 'single'],
      'quote-props': ['error', 'consistent-as-needed'],
      'react/forbid-component-props': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-max-depth': 'off',
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-no-bind': ['error', { allowFunctions: true }],
      'react/jsx-no-literals': 'off',
      'react/jsx-newline': ['error', { prevent: true }],
      'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
      'react/jsx-sort-props': ['error', {
        callbacksLast: true,
        shorthandLast: true,
        noSortAlphabetically: true
      }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'semi': ['error', 'never'],
      'sort-imports': 'off',
      'sort-keys': 'off',
      'space-before-function-paren': ['error', 'never'],
      'id-length': ['error', { exceptions: ['q', 'e', 'm', 'g'] }],
      'no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],

      // TMP
      'max-lines-per-function': 'off',
      'no-magic-numbers': 'off',
      'react/require-default-props': ['error', { functions: 'defaultArguments' }]
    }
  }
]
