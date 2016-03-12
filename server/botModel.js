var r = require('rethinkdb')
var sentiment = require('sentiment');
var _ = require('lodash');
var globalConn;
r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  if(err) throw err;
  globalConn = conn;

  //creates tables TODO: make run only once

  // creates db...commented out because the db has been created
  r.db('test').tableCreate('messages').run(conn, function(err, res) {
    if(err) throw err;
    console.log(res);
  });
  // r.db('test').tableCreate('parsedMessages').run(conn, function(err, res) {
  //   if(err) throw err;
  //   console.log(res);
  // });
});

module.exports = function(msg, cb){
  console.log('saving message');
  // r.table('parsedMessages').insert(sentiment(msg.text)).run(globalConn, function(err, res){
  //   if(err){
  //     throw err;
  //   } else{
  //     console.log(res);
  //   }
  // });
  //concat obj

  var allData = _.extend(msg, sentiment(msg.text));

  r.table('messages').insert(allData).run(globalConn, function(err, res){
  console.log('saving message and anaylizing message');
  console.log(sentiment(msg.text));
    console.log('categorizing messages...')
    console.log(res);

});
}


