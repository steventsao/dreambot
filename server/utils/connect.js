var r = require('rethinkdb');

// TODO: pull connection info from env instead of hardcoding
module.exports = function connect() {
  return r.connect({
    host: 'localhost',
    port: 28015,
    db: 'test'
  });
}
