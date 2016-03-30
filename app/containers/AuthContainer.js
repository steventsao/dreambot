import React from 'react';

const AuthContainer = React.createClass({
  componentDidMount() {
    console.log('Hai. Im the auth container');
  },

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

export default AuthContainer;
