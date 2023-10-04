module.exports = {
	'rules': {
		'perfectionist/sort-objects': [
			'error',
			{
				'type': 'line-length',
				'order': 'desc'
			}
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'object-curly-spacing': ['error', 'always'],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'react/react-in-jsx-scope':'off',
		'indent': ['error', 'tab']
	},
	'overrides': [
		{
			'parserOptions': {
				'sourceType': 'script'
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'env': {
				'node': true
			}
		}
	],
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:perfectionist/recommended-line-length'
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'perfectionist',
		'@typescript-eslint',
		'react',

	],
	'env': {
		'browser': true,
		'es2021': true
	},
	'parser': '@typescript-eslint/parser'
};
