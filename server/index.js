var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


server.listen(8090);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  var n = 0;
  console.log('a user connected');
  // socket.emit('test', {foo: 'bar'});
  setInterval(add, 1000);
  function add() {
    n++;
    socket.emit('n', n);
  }
});