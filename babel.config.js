module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-flow',
    ],
    plugins: [
        // 'babel-plugin-styled-ui',
        '@babel/plugin-proposal-class-properties',
    ],
};
