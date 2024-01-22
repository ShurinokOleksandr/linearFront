/** @type {import('next').NextConfig} */

const nextConfig = {
	env: {
		NEXTAUTH_SECRET: 'mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=',
	},
	experimental: {
		forceSwcTransforms: true,
	},
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
