// This file spawns a bot and attaches all listeners from the `listeners/` directory

// Start the bot and grab the controller
import controller from '../utils/spawnBot';

import listeners from './listeners';

// add listeners to controller
Object.keys(listeners).forEach((listener) => {
  listeners[listener](controller);
});
