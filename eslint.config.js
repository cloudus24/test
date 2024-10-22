/** @type {import('eslint').Linter.Config} */
const config = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'next/core-web-vitals', // Add Next.js core rules
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        // Customize your rules here
    },
};

module.exports = config;
