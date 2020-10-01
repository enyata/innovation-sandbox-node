module.exports = {
  env: {
    browser: true,
    es6: true,
    "mocha": true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "arrow-body-style": "error",
    "camelcase": "off",
    "dot-notation": "error",
    "array-bracket-spacing": ["error", "always"],
    "comma-dangle": "error",
    "comma-spacing": "error",
    "block-scoped-var": "error",
    "complexity": "error",
    "constructor-super": "error",
    "default-case": "error",
    "eol-last": "error",
    "valid-jsdoc": "error",
    "no-var": "error",
    "no-duplicate-imports": "error",
    "no-irregular-whitespace": "error",
    "consistent-this": "error",
    "func-name-matching": "error",
    "no-trailing-spaces": "error",
    "arrow-spacing": "error",
    "arrow-parens": "off",
    "prefer-const": "error",
    "prefer-spread": "error",
    "prefer-destructuring": "error",
    "no-unused-vars": "error",
    "no-useless-return": "error",
    "semi": ["error", "always"],
    "no-empty": ["warn", {
      "allowEmptyCatch": true
    }],
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": true
    }],
    "no-multiple-empty-lines": "error",
    "one-var": ["error", {
      "uninitialized": "always",
      "initialized": "never"
    }],
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true
    }],
    "space-unary-ops": ["error", {
      "words": false,
      "nonwords": false
    }],
    "semi-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "no-spaced-func": "error",
    "comma-style": ["error", "last"],
    "curly": ["error", "all"],
    "object-shorthand": "error",
    "operator-linebreak": ["error", "after"],
    "space-infix-ops": "error",
    "keyword-spacing": ["error", {
      "overrides": {
        "else": {
          "before": true
        },
        "while": {
          "before": true
        },
        "catch": {
          "before": true
        }
      }
    }],
    "spaced-comment": ["error", "always"],
    "space-before-blocks": ["error", "always"],
    "indent": ["error", 4, {
      "SwitchCase": 2
    }],
    "quotes": ["error", "single", {
      "avoidEscape": true
    }],
    "func-names": ["error", "never"],
    "no-console": "off"
  },
};
