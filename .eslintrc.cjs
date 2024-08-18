module.exports = {
    root: true,
    env: {
        browser: true,
        es2023: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.app.json", "./tsconfig.node.json"],
        tsconfigRootDir: __dirname
    },
    overrides: [
        {
            extends: [
                "plugin:@typescript-eslint/disable-type-checked",
                "plugin:jest/recommended"
            ],
            plugins: ["jest"],
            files: ["./**/*.js", "./**/*.ts", "./**/*.tsx", "tests/**/*"]
        }
    ],
    ignorePatterns: [
        "dist",
        ".eslintrc.cjs",
        "iac",
        ".github/",
        "src/vite-env.d.ts",
        "__tests__"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["react", "react-refresh"],
    rules: {
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-misused-promises": "warn",
        "@typescript-eslint/no-unsafe-return": "warn",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/no-unsafe-enum-comparison": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true }
        ]
    }
};
