import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import io from 'socket.io-client';
const socket = io('http://localhost:1337');
import { addMessage, fetchMessages } from '../actions';

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );

  // TODO: move this to a separate file
  socket.on('test', (data) => {
    store.dispatch(addMessage(data.new_val));
  });

  store.dispatch(fetchMessages())
    .then(() => {
      console.log('Fetched all messages from database');
    })
    .catch((err) => {
      console.log(err)
    })
  
  return store;
}

