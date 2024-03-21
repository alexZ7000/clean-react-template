module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname
    },
    overrides: [
        {
            extends: ["plugin:@typescript-eslint/disable-type-checked"],
            files: ["./**/*.js"]
        }
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react", "react-refresh"],
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true }
        ]
    }
};
