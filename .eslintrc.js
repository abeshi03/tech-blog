module.exports = {
  extends: ["next", "next/core-web-vitals"],
  rules: {
    semi: "error",
    quotes: ["error", "double"],
    "import/prefer-default-export": "off",
    "newline-before-return": "error",
    "no-console": "warn",
    "no-var": "error",
  },
};
