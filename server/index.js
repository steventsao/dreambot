var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var r = require('rethinkdb');
var connect = require('./utils/connect');

require('./bot/bot.js');


server.listen(8090);

// app.get('/', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

// TODO: move this into it's own module? placement depends on file structure?
// Returns a promise
function getChangeFeed() {
  return connect()
    .then(conn => {
      return r.table('messages').changes().run(conn)
    })
}

getChangeFeed()
  .then(cursor => {
    cursor.each((err, change) => {
      console.log('change detected!', change);
      io.emit('test', change);
    })
  })

io.on('connection', function(socket){
  // var n = 0;
  // console.log('a user connected');
  // // socket.emit('test', {foo: 'bar'});
  // setInterval(add, 1000);
  // function add() {
  //   n++;
  //   socket.emit('n', n);
  // }
});
