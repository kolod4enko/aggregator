module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^nest', '^\\w', '^@?\\w'],
          ['@constants', '@helpers*', '@db*', '@modules*'],
          [('^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$')],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'prettier/prettier': ['error', { singleQuote: true, printWidth: 100 }],
  },
};
