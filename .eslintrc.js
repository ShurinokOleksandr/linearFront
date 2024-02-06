module.exports = {
    rules: {
        'perfectionist/sort-objects': [
            'error',
            {
                type: 'line-length',
                order: 'desc',
            },
        ],
        'validate-jsx-nesting/no-invalid-jsx-nesting': 'error',
        '@tanstack/query/no-rest-destructuring': 'warn',
        '@tanstack/query/stable-query-client': 'error',
        'react/jsx-curly-brace-presence': [2, 'never'],
        'object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@tanstack/query/exhaustive-deps': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'no-mixed-spaces-and-tabs': 'off',
        'react/react-in-jsx-scope': 'off',
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        indent: ['error', 4],
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:perfectionist/recommended-line-length',
        'plugin:storybook/recommended',
        'plugin:@tanstack/eslint-plugin-query/recommended',
        'next',
    ],
    overrides: [
        {
            parserOptions: {
                sourceType: 'script',
            },
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
        },
    ],
    plugins: [
        'perfectionist',
        '@typescript-eslint',
        'react',
        '@tanstack/query',
        'validate-jsx-nesting',
    ],
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
};
