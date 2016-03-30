import React from 'react';
import AuthContainer from '../containers/AuthContainer';

const App = React.createClass({
  render() {
    return (
      <AuthContainer>
        {this.props.children}
      </AuthContainer>
    );
  }
});

export default App;
