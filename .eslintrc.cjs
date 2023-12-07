/** @type {import('eslint').Linter.Config} */
module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  root: true,
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node", "prettier", "plugin:tailwindcss/recommended"],
  plugins: ["tailwindcss"],
  settings: {
    tailwindcss: { callees: ["cn"], config: "tailwind.config.ts" },
  },
  overrides: [{ files: ["*.ts", "*.tsx"], parser: "@typescript-eslint/parser" }],
};
