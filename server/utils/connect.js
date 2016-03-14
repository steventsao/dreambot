var r = require('rethinkdb');
var env = require('./envDefaults');

// TODO: pull connection info from env instead of hardcoding
module.exports = function connect() {
  return r.connect({
    host: env.rethinkHost,
    port: env.rethinkPort,
    db: env.rethinkDb
  });
};
