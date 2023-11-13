/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		forceSwcTransforms: true,
	},
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
