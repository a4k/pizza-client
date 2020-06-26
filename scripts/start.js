process.env.NODE_ENV = 'development';
process.env.API_URL = 'http://localhost:1337';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.dev');

const host = 'localhost';
const port = 8080;

const devServerConfig = {
  contentBase: config.output.path,
  publicPath: config.output.publicPath,
  watchContentBase: true,
  clientLogLevel: 'none',
  hot: true,
  stats: {
    colors: true,
    modules: false,
  },
  port,
  host,
};

WebpackDevServer.addDevServerEntrypoints(config, devServerConfig);

const compiler = webpack(config);
const devServer = new WebpackDevServer(compiler, devServerConfig);

devServer.listen(port, host, () => {
  console.log(`Starting server on ${host}:${port}`);
});
