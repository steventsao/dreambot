var r = require('rethinkdb')
var sentiment = require('sentiment');
var globalConn;
r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  if(err) throw err;
  globalConn = conn;

  //creates tables TODO: make run only once

  // creates db...commented out because the db has been created
  // r.db('test').tableCreate('rawMessages').run(conn, function(err, res) {
  //   if(err) throw err;
  //   console.log(res);
  // });
  // r.db('test').tableCreate('parsedMessages').run(conn, function(err, res) {
  //   if(err) throw err;
  //   console.log(res);
  // });
});

module.exports = function(msg, cb){
  console.log('saving message');
  r.table('parsedMessages').insert(sentiment(msg.text)).run(globalConn, function(err, res){
    if(err){
      throw err;
    } else{
      console.log(res);
    }
  });
  r.table('rawMessages').insert(msg).run(globalConn, function(err, res){
  console.log('saving message and anaylizing message');
  console.log(sentiment(msg.text));
  require('./witai.js')(msg.text, function(res){
    console.log('categorizing messages...')
    console.log(res);
    cb(res.outcomes[0].confidence);
  })
});
}


