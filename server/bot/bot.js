if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

// Start the bot and grab the controller
var controller = require('./spawnBot');

var listeners = require('./listeners');

// add listeners to controller
Object.keys(listeners).forEach((listener) => {
  listeners[listener](controller);
});
