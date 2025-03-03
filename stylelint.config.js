export default {
  extends: [
    "stylelint-config-standard"
  ],
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "color-no-invalid-hex": true,
    "indentation": 2,
    "string-quotes": "double",
    "block-no-empty": true,
    "unit-allowed-list": ['em', 'px', 'rem','%', 's'],
  }
};
