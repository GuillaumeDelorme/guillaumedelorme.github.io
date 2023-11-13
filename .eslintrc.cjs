module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
  },
};
