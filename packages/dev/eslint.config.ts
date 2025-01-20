import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettier from "eslint-config-prettier";
import { Linter, Rule } from "eslint";

// declare module "eslint-plugin-react-hooks" {
//   export const configs: {
//     recommended: Linter.Config;
//   };

//   const rules: {
//     "rules-of-hooks": Rule.RuleModule;
//     "exhaustive-deps": Rule.RuleModule;
//   };

//   const plugin: {
//     configs: typeof configs;
//     rules: typeof rules;
//   };

//   export default plugin;
// }

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  // prettier as any,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react,
      "simple-import-sort": simpleImportSort,
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-hooks/exhaustive-deps": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
);
