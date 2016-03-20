'use strict';
const r = require('rethinkdb');
const testMessages = require('../data/testMessages.json');

r.connect({ host: 'localhost', port: 28015 }).then(conn => {
  r.db('test').table('messages').insert(testMessages)
    .run(conn)
    .then(() => conn.close()
      .then(() => console.log('connection closed')))
    .catch(err => console.error(err));
});
