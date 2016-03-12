r = require('rethinkdb')
var globalConn;
r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  if(err) throw err;
  globalConn = conn;

  // creates db...commented out because the db has been created
  r.db('test').tableCreate('rawMessages').run(conn, function(err, res) {
    if(err) throw err;
    console.log(res);
  });  
  r.db('test').tableCreate('parsedMessages').run(conn, function(err, res) {
    if(err) throw err;
    console.log(res);
  });
});

module.exports = function(msg){
  console.log('saving message');
  r.table('rawMessages').insert(msg).run(globalConn, function(err, res)
    {
      if(err) throw err;
      console.log(res);
    });
}
