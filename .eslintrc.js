module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'prettier', 'unused-imports', 'import', 'react'],
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': ['error'],
    'react/prop-types': ['error', { ignore: ['children', 'store'] }],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          ['^react', '^@?\\w'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'unused-imports/no-unused-imports': ['error'],
    'sort-imports': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
