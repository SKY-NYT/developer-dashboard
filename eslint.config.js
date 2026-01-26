import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettierConfig,

  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-unused-vars': 'error',
      eqeqeq: 'warn',
    },
  },
];
