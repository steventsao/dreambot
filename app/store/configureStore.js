import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { connection, r } from '../utils/rethink';
import { addMessage, fetchMessages } from '../actions';

export default function configureStore(initialState) {
  const logger = createLogger({collapsed: true});
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );

  // TODO: move this to a separate file?
  connection
    .then(conn => r.table('messages').changes().run(conn)
      .then(cursor => cursor.each((err, data) => store.dispatch(addMessage(data.new_val))))
    );

  store.dispatch(fetchMessages())
    .then(() => {
      console.log('Fetched all messages from database');
    })
    .catch((err) => {
      console.log(err);
    });

  return store;
}

