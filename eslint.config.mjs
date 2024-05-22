import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        process: "readonly",
      },
    },
  },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-unused-expressions": "warn",
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
