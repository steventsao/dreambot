import React from 'react';
import { connect } from 'react-redux';
import { redirectIfNoToken } from '../actions/authActions';

const AuthContainer = React.createClass({
  componentWillMount() {
    const { token, dispatch } = this.props;
    if (!token) {
      dispatch(redirectIfNoToken());
    }
  },

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    token: state.auth.token
  };
}

export default connect(mapStateToProps)(AuthContainer);
