module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended', 
    'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-unused-vars': 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'only-multiline'], // require or disallow trailing commas
    'semi-style': ['error', 'last'],
    'object-curly-spacing': ['error', 'always'], // enforce consistent spacing inside braces
    'newline-per-chained-call': ['error'], // require a newline after each call in a method chain
    'brace-style': 'warn', // Require Brace Style
    complexity: 'warn', // Limit Cyclomatic Complexity
    curly: 'warn', // Enforce Usage of Spacing in Template Strings
  },
};