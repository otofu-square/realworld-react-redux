module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['react', 'jsx-a11y', 'import', 'flowtype', 'immutable'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'new-cap': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'no-duplicate-imports': 0,
    'no-mixed-operators': [2, { allowSamePrecedence: true }],
    'arrow-parens': [2, 'as-needed'],
    'flowtype/semi': [2, 'always'],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'immutable/no-let': 2,
    'immutable/no-this': 2,
    'immutable/no-mutation': 2,
    'react/sort-comp': [
      2,
      {
        order: ['static-methods', '/^(props|state)$/', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/no-array-index-key': 1,
    'react/prop-types': 0,
    'react/jsx-wrap-multilines': 0,
  },
};
