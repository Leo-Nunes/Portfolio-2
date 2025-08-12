import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "react-hooks": reactHooks,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: {
        version: "999.999.999",
      },
    },
  },
]);


// // import { defineConfig } from "eslint/config";
// // import globals from "globals";
// // import js from "@eslint/js";
// // import tseslint from "typescript-eslint";
// // import pluginReact from "eslint-plugin-react";
// // import reactHooks from "eslint-plugin-react-hooks";


// // export default defineConfig([
// //   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
// //   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
// //   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
// //   tseslint.configs.recommended,
// //   pluginReact.configs.flat.recommended,
// // {
// //   settings: {
// //     react: {
// //       version: '999.999.999',
// //     },
// //   }
// // },
// // {
// //   files: ['**/*.{js,jsx}'],
// //   plugins: { 'react-hooks': reactHooks },
// //   rules: {
// //     'react-hooks/rules-of-hooks': 'error',
// //     'react-hooks/exhaustive-deps': 'warn',
// //   }
// // },
// //   {
// //   "rules": {
// //     "react/prop-types": "off",
// //     "react/react-in-jsx-scope": "off",
// //     "@typescript-eslint/explicit-module-boundary-types": "off"
// // },
// //   }
// // ]);
