module.exports = function(api) {
  api.cache(true);

  const getEnvPreset = () =>
    process.env.NODE_ENV === 'test'
      ? [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current',
              },
            },
          ],
        ]
      : [
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'entry',
              modules: false,
              corejs: 3,
            },
          ],
        ];

  const getProductionPlugins = () =>
    process.env.ENV === 'production'
      ? [
          '@babel/plugin-transform-react-constant-elements',
          '@babel/plugin-transform-react-inline-elements',
          'babel-plugin-transform-react-remove-prop-types',
        ]
      : ['react-hot-loader/babel'];

  const presets = [
    ...getEnvPreset(),
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];

  const plugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
    ...getProductionPlugins(),
  ];

  return {
    presets,
    plugins,
  };
};
