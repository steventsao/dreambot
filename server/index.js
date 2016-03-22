var path = require('path');

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var RethinkdbWebsocketServer = require('rethinkdb-websocket-server');

var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var config = require('../webpack.config.js');
var env = require('./utils/envDefaults');

RethinkdbWebsocketServer.listen({
  httpServer: server,
  httpPath: '/db',
  dbHost: env.rethinkHost,
  dbPort: env.rethinkPort,
  unsafelyAllowAnyQuery: true
});

require('./bot/bot.js');

// Add routes to app here:
// ex: app.use('/api', apiRoutes);

// referenced https://github.com/christianalfoni/webpack-express-boilerplate
if (env.isDev) {
  var compiler = webpack(config);
  var middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')));
    res.end();
  });
} else {
  app.use('/assets', express.static('dist'));

  // This redirects any GET requests that aren't for '/' or our above-mentioned
  // routes to the home-page, letting the router on our SPA front-end handle it.
  // This way, trying to refresh a specific page of the app won't
  // end in a "cannot GET '/part/of/app'" error
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

server.listen(env.port, () => console.log(`App Listening on port ${env.port}`));
