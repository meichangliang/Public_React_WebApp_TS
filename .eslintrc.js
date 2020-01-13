module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  extends: ["plugin:react/recommended", "react-app"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    useJSXTextNode: true,
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  rules: {
    //TS相关
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ["_this"], // Allow `const self = this`; `[]` by default
      },
    ],
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    //重点指导
    "no-var": "error",
    "arrow-body-style": ["error", "always"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": "error",
    "generator-star-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": ["error", "never"],
    "sort-imports": "off",
    "template-curly-spacing": "error",
    "no-multi-spaces": "error",
    "no-console": [
      "warn",
      {
        allow: [
          "warn",
          "error",
          "info",
          "group",
          "groupCollapsed",
          "groupEnd",
          "table",
        ],
      },
    ],
    //ES6相关
    "prefer-const": "error",
    "object-shorthand": "error",
    //node相关
    "no-buffer-constructor": "error",
    "no-mixed-requires": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-exit": "error",
    //变量声明
    "no-undefined": "error",
    "no-label-var": "error",
    //严格模式
    strict: "error",
    //最佳实践
    yoda: "error",
    "wrap-iife": ["error", "outside"],
    "vars-on-top": "error",
    "require-await": "error",
    radix: "error",
    "prefer-promise-reject-errors": "error",
    "no-void": "error",
    "no-useless-return": "error",
    "no-useless-concat": "error",
    "no-unused-expressions": "error",
    "no-sequences": "error",
    "no-self-compare": "error",
    "no-script-url": "error",
    "no-return-await": "error",
    "no-return-assign": "error",
    "no-proto": "error",
    "no-param-reassign": "error",
    "no-octal-escape": "error",
    "no-new-wrappers": "error",
    "no-new-func": "error",
    "no-new": "error",
    "no-multi-str": "error",
    "no-loop-func": "error",
    "no-lone-blocks": "error",
    "no-labels": "error",
    "no-iterator": "error",
    "no-implicit-globals": "error",
    "no-implicit-coercion": "error",
    "no-floating-decimal": "error",
    "no-extra-label": "error",
    "no-extend-native": "error",
    "no-eval": "error",
    "no-eq-null": "error",
    "no-div-regex": "error",
    "no-caller": "error",
    "no-alert": "warn",
    eqeqeq: ["error", "always"],
    "dot-location": ["error", "property"],
    "default-case": "error",
    curly: "error",
    "accessor-pairs": "error",
    "block-scoped-var": "error",
    //风格指导
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": "error",
    "array-element-newline": ["error", "consistent"],
    "block-spacing": "error",
    "brace-style": "error",
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": "error",
    "computed-property-spacing": "error",
    "consistent-this": ["error", "_this"],
    "eol-last": "error",
    "func-call-spacing": "error",
    "id-length": ["error", { min: 1 }],
    "max-params": ["error", 3],
    "implicit-arrow-linebreak": ["error", "beside"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "lines-between-class-members": ["error", "always"],
    "no-multiple-empty-lines": "error",
    "multiline-ternary": ["error", "never"],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-whitespace-before-property": "error",
    "no-unneeded-ternary": "error",
    "object-property-newline": "error",
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": "error",
    "operator-assignment": "error",
    "operator-linebreak": "error",
    "prefer-object-spread": "error",
    "quote-props": ["error", "as-needed"],
    quotes: "error",
    semi: ["error", "always"],
    "semi-spacing": "error",
    "semi-style": "error",
    "sort-vars": "error",
    "space-before-blocks": "error",
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "switch-colon-spacing": "error",
    "template-tag-spacing": "error",
    "unicode-bom": "error",
    "wrap-regex": "error",
  },
};

// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin

// https://cn.eslint.org/docs/rules/
