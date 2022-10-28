module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard-with-typescript",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/triple-slash-reference": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
