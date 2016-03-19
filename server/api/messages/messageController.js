var connect = require('../../utils/connect');
var r = require('rethinkdb');

module.exports = {
  getMessages(req, res) {
    connect()
      .then(conn => {
        r.table('messages').run(conn)
          .then(cursor => {
            cursor.toArray().then(result => res.send(result));
          });
      });
  },

  getMessagesByHour(req, res) {
    connect()
      .then(conn => {
        r.table('messages').group(r.row('ts').hours()).run(conn)
          .then(cursor => {
            cursor.toArray().then(result => res.send(result));
          });
      });
  },

  getMessagesByDayOfWeek(req, res) {
    connect()
      .then(conn => {
        r.table('messages').group(r.row('ts').dayOfWeek()).run(conn)
          .then(cursor => {
            cursor.toArray().then(result => res.send(result));
          });
      });
  },
  getSearchResults(req, res) {
    console.log(req.query.word);
    connect()
      .then(conn => {
        r.table('messages').filter(message => {
          return message('name').eq(req.query.word)
            .or(message('tokens').contains(req.query.word))
        }).run(conn)
        .then(cursor => {
          cursor.toArray().then(result => res.send(result)); 
        });
    });
  }
};
