import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.

  // This is for eslint-plugin-simple-import-sort configuration
  {
    plugins: {
      "simple-import-sort": pluginSimpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      // 🔥 Sort imports and exports
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^\\u0000", "^@?\\w", "^[^.]", "^\\."]],
        },
      ],
      "simple-import-sort/exports": "error",

      // 🔥 Remove unused imports automatically
      "unused-imports/no-unused-imports": "error",
      // 🔥 Remove unused variables but allow "_" prefix
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "prettier",
  ]),
]);

export default eslintConfig;
