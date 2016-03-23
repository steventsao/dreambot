import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import Questions from '../components/Questions'
import TestContainer from '../containers/TestContainer';
import QuestionsContainer from '../containers/QuestionsContainer';
const Routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="/test" component={TestContainer} />
    <Route path="/questions" component={Questions} />
  </Route>
);

export default Routes;
