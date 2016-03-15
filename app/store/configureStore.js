import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers'
import logger from 'redux-logger'

// applying middleware

export default function configureStore(initialState){
  const store = createStore(rootReducer);
  return store;
}

