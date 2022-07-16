module.exports = {
  extends: [
    'standard-react',
    'standard-jsx',
    'standard-with-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'comma-dangle': [
      'error', {
        arrays: 'never',
        objects: 'always',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      }
    ],
  },
}
