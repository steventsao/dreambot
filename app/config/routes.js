import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Graph from '../components/Graph';

const Routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/graph' component={Graph}/>
    </Route>
  </Router>
);

export default Routes;
