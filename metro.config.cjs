// Metro configuration (CommonJS) to support additional module formats and resolver settings
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
    ...defaultConfig,
    resolver: {
        ...defaultConfig.resolver,
        sourceExts: [
            ...(defaultConfig.resolver?.sourceExts || [
                'js',
                'json',
                'ts',
                'tsx',
                'jsx',
            ]),
            'cjs',
            'mjs',
        ],
        resolverMainFields: ['react-native', 'browser', 'main'],
    },
};

module.exports = config;
