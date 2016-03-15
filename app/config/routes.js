import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Navbar from '../components/Navbar';

const Routes = (
  <Router>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
    <Route path='/navbar' component={Navbar}></Route>
  </Router>
);

export default Routes;
