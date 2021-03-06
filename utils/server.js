const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());
const config = require('../config/webpack/webpack.dev.config');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {publicPath: config.output.publicPath
  })
);
app.use(require("webpack-hot-middleware")(compiler));
// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
