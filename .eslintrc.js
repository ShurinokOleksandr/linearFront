module.exports = {
	rules: {
		'perfectionist/sort-objects': [
			'error',
			{
				type: 'line-length',
				order: 'desc',
			},
		],
		'react/jsx-curly-brace-presence': [2, 'never'],
		'object-curly-spacing': ['error', 'always'],
		'@typescript-eslint/no-explicit-any': 'off',
		'jsx-quotes': ['error', 'prefer-single'],
		'no-mixed-spaces-and-tabs': 'off',
		'react/react-in-jsx-scope': 'off',
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		indent: ['error', 'tab'],
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:perfectionist/recommended-line-length',
		'plugin:storybook/recommended',
	],
	overrides: [
		{
			parserOptions: {
				sourceType: 'script',
			},
			files: ['.eslintrc.{js,cjs}'],
			env: {
				node: true,
			},
		},
	],
	plugins: ['perfectionist', '@typescript-eslint', 'react'],
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
};
