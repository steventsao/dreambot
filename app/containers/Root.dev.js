// From: https://github.com/reactjs/redux/blob/master/examples/real-world/containers/Root.dev.js

import React, { Component, PropTypes } from 'react';
import routes from '../config/routes';
// import DevTools from './DevTools';
import { Router } from 'react-router';

// TODO: Move to React.createClass ?
class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
        <div>
          <Router history={history} routes={routes} />
          { /* <DevTools /> */ }
        </div>
    );
  }
}


Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;