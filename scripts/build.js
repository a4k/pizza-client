process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const config = require('../config/webpack.prod');

const compiler = webpack(config);

const STATS_OPTIONS = {
  assets: false,
  colors: true,
  version: false,
  modules: false,
  hash: false,
  timings: false,
  chunks: false,
  chunkModules: false,
  reasons: true,
  cached: true,
  chunkOrigins: true,
};

compiler.plugin('compile', () => console.log('Building...'));

compiler.run(function(error, stats) {
  if (error) {
    console.error(error.stack || error);
    if (error.details) {
      console.error(error.details);
    }
    process.exit(1);
  }
  process.stdout.write(stats.toString(STATS_OPTIONS) + '\n');
});
