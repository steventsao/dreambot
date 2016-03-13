var r = require('rethinkdb')
var sentiment = require('sentiment');
var _ = require('lodash');
var connect = require('./utils/connect');

module.exports = function(msg, cb){
  console.log('saving message');

  var allData = _.extend(msg, sentiment(msg.text));

  connect()
    .then(conn => {
      r.table('messages').insert(allData).run(conn)
        .then(res => {
          console.log('saving message and anaylizing message');
          console.log(sentiment(msg.text));
          console.log('categorizing messages...')
          console.log(res);
        });
    })
    .catch(err => {
      console.log(err);
    });
}
