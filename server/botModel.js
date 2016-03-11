r = require('rethinkdb')
var globalConn;
r.connect({ host: 'localhost', port: 28015 }, function(err, conn) {
  if(err) throw err;
  globalConn = conn;

  // creates db...commented out because the db has been created
  // r.db('test').tableCreate('dreambot').run(conn, function(err, res) {
  //   if(err) throw err;
  //   console.log(res);
  // });
});

// saves message to db
module.exports = function(msg){
  console.log('saving message');
  r.table('dreambot').insert(msg).run(globalConn, function(err, res)
    {
      if(err) throw err;
      console.log(res);
    });
}
