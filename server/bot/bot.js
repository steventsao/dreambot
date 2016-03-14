// This file spawns a bot and attaches all listeners from the `listeners/` directory

if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

// Start the bot and grab the controller
var controller = require('../utils/spawnBot');

var listeners = require('./listeners');

// add listeners to controller
Object.keys(listeners).forEach((listener) => {
  listeners[listener](controller);
});
