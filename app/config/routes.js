import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Graph from '../components/Graph';

const Routes = (
  <Route path='/' component={Main}>
    <IndexRoute component={Home} />
    <Route path='/graph' component={Graph}/>
  </Route>
);

export default Routes;
