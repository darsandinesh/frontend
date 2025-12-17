import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import path from "path";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "*.config.ts",
      "*.config.js",
      "vite.config.ts",
      "tailwind.config.js",
      "postcss.config.js",
    ],
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: path.resolve(__dirname, "tsconfig.app.json"), // updated to tsconfig.app.json recommended
      },
      globals: {
        React: "readonly",
      },
    },
    plugins: {
      react,
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",

      // General rules
      "no-console": "warn",
      "no-debugger": "warn",
      "prefer-const": "warn",
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
