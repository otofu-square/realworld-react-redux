module.exports = {
  extends: "react-app",
  rules: {
    "jsx-a11y/anchor-is-valid": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_$" }]
  }
};
