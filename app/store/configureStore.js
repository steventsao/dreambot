import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers'
import logger from 'redux-logger'

// applying middleware
let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers').default
    store.replaceReducer(nextReducer)
  })
  }

  return store;
}