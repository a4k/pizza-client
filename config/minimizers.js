const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const getOptimizeCssAssetsPlugin = () => new OptimizeCssAssetsPlugin({});

const getTerserPlugin = () =>
  new TerserPlugin({
    terserOptions: {
      parse: { ecma: 8 },
      compress: {
        ecma: 5,
        warnings: false,
        comparisons: false,
        inline: 2,
      },
      mangle: {
        safari10: true,
      },
      output: {
        ecma: 5,
        comments: false,
        ascii_only: true,
      },
      parallel: true,
      cache: true,
    },
  });

const getMinimizers = () => [getTerserPlugin(), getOptimizeCssAssetsPlugin()];

module.exports = {
  getMinimizers,
};
