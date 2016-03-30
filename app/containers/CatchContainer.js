// 1. Add react-redux-router because:
//    a. It gives us the history available in our
//       store so we can return the user to the page
//       they left when we redirected them to login
//          NOTE: this isn't currently possible since authenticating
//                with github redirects us out of the app, forcing the entire
//                app to reload upon re-entry
//    b. It opens up time-travel debugging options later
// 2. Wrap app in an "auth" component that redirects to login when no token
// 3. Have CatchContainer redirect them to the page they were
//    on before we made them login

import React from 'react';
import { connect } from 'react-redux';
import { addTokenIfExists } from '../actions/authActions';

const CatchContainer = React.createClass({
  componentWillMount() {
    const { token } = this.props.location.query;
    this.props.dispatch(addTokenIfExists(token));
  },

  render() {
    return (
      <div>Loading...</div>
    );
  }
});

function mapStateToProps(state) {
  // Ideally, we would have the "previous route" that the user was
  // viewing before entering our authentication process available here
  // However, that's not currently possible as the app is
  // reloaded after authenticating with github.
  // As it stands, this is solely here to make `dispatch` available.
  return {};
}

export default connect(mapStateToProps)(CatchContainer);
