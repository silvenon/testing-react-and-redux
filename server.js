/* eslint-disable no-console */
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');
const Express = require('express');

const app = new Express();
const port = 3000;
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use((req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});
app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
