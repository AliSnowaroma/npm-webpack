//require('babel-register')
// require('@babel/core');
const config = require('./config/webpack-dev-config')

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server');
const PrettyError = require('pretty-error');
// const DashBoard = require('webpack-dashboard');
// const DashboardPlugin = require('webpack-dashboard/plugin');

// const httpclient = require('urllib');
// const DiamondClient = require('diamond-client');

const pe = new PrettyError();

const compiler = webpack(config)
// compiler.apply(new DashboardPlugin(new DashBoard().setData));
// compiler.hooks.done.tapAsync('OpenHomePage', (compilation, callback) => {
//   callback();

//   if (alreadyOpenHomePage) {
//     return;
//   }

//   alreadyOpenHomePage = true;

//   const publicPath = `http://${getRealIp()}:${config.devServer.port}/`;
//   const entries = Object.keys(config.entry);

//   if (entries.length === 1) {
//     open(`${publicPath}${entries[0]}/index.html`);
//   } else {
//     open(`${publicPath}webpack-dev-server`);
//   }
// });

try {
  new WebpackDevServer(compiler, config.devServer).listen(config.devServer.port);
} catch (err) {
  console.log(pe.render(err));
}
