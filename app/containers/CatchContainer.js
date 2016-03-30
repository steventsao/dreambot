// 1. Add react-redux-router because:
//    a. It gives us the history available in our
//       store so we can return the user to the page
//       they left when we redirected them to login
//    b. It opens up time-travel debugging options later
// 2. Wrap app in an "auth" component that redirects to login when no token
// 3. Have CatchContainer redirect them to the page they were
//    on before we made them login

import React from 'react';

const CatchContainer = React.createClass({
  componentDidMount() {
    console.log('THE TOKEN IS: ', this.props.location.query.token);
    window.localStorage.setItem('token', this.props.location.query.token);
  },

  render() {
    return (
      <div>Catching...</div>
    );
  }
});

export default CatchContainer;
