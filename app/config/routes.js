import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';

const Routes = (
  <Router>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default Routes;
