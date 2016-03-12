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

module.exports = function(msg){
  console.log('saving message');
  //if there is existing data
  // r.table('parsedMessages').hasFields('totalSentiment').run(globalConn, function(err, res){
  //   //update data
  // });

  // //if there is no data in the table
  // r.table('parsedMessages').filter(
  //   r.row.hasFields('totalSentiment').not())
  //   .run(globalConn, function(){
  //       //insert starting data
  //       r.table('parsedMessages').insert({'sentiment': sentiment(msg.text).comparative, 'totalSentiment': sentiment(msg.text).comparative, 'totalInputs': 1}).run(globalConn, function(err, res){
  //         if(err){
  //           throw err;
  //         } else{
  //           console.log(res);
  //         }
  //       });
  // });

  r.table('parsedMessages').insert(sentiment(msg.text)).run(globalConn, function(err, res){
    if(err){
      throw err;
    } else{
      console.log(res);
    }
  });

  console.log('saving message and anaylizing message');
  r.table('dreambot').insert(msg).run(globalConn, function(err, res)
    {
      if(err) throw err;
      console.log(res);
    });
}

