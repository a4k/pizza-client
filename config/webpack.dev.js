const path = require('path');

const { getPlugins } = require('./plugins');
const { getLoaders } = require('./loaders');

const config = {
  mode: 'development',
  entry: {
    main: [path.resolve(process.cwd(), 'src/index.tsx')],
  },
  output: {
    path: path.resolve(process.cwd(), 'build'),
    pathinfo: true,
    publicPath: '/',
    filename: './assets/js/bundle.js',
    chunkFilename: './assets/js/[name].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: getLoaders({ folder: 'assets' }),
  },
  plugins: getPlugins({ folder: 'assets' }),
};

module.exports = config;
