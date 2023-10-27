module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ["error","unix"],
    "quotes": ["error","single"],
    "@typescript-eslint/semi": ["error", "always"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "indent": "off",
    "@typescript-eslint/indent": [1, "tab"],
    //indent: ['error', 2, { "MemberExpression": 1 }],
    //indent: [1, "tab"],
    //"no-tabs": 0,
    //'indent': ['error', 4], // تنظیم تعداد فاصله‌های indentation به 2
  },
};
