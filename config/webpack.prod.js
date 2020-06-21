const path = require('path');

const { getLoaders } = require('./loaders');
const { getPlugins } = require('./plugins');
const { getMinimizers } = require('./minimizers');

const config = {
  mode: 'production',
  entry: {
    main: [path.resolve(process.cwd(), 'src/index.tsx')],
  },
  output: {
    path: path.resolve(process.cwd(), 'build'),
    pathinfo: true,
    publicPath: '/',
    filename: 'assets/js/[name].[contenthash:8].js',
    chunkFilename: 'assets/js/[name].[contenthash:8].chunk.js',
  },
  optimization: {
    minimize: true,
    minimizer: getMinimizers(),
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
  },
  module: {
    rules: getLoaders({ folder: 'assets' }),
  },
  plugins: getPlugins({ folder: 'assets' }),
};

module.exports = config;
