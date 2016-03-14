// from: https://github.com/reactjs/redux/blob/master/examples/real-world/index.js

/*
  Research: Why does he import the babel-polyfill?
*/
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { createStore } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
// import configureStore from './store/configureStore';

// const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store)

/*
  We're ignoring what he does with react-router-redux and what he dies in `./store/configureStore` for now.
  So, we'll make our own simple placeholder store
  Later, we should hook this up to a RootReducer ( I think )
*/
const store = createStore((state, action) => 'newstate');

// TODO: Turn this into a function and use hot-reloading
render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('app')
);
