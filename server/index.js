var io = require('socket.io')().attach(8090);

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


