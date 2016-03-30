import React from 'react';
import GlobalNotifications from '../containers/GlobalNotifications';
import AuthContainer from '../containers/AuthContainer';

const Main = React.createClass({
  render() {
    const NotificationsStyleMap = {
      error: 'is-danger',
      warning: 'is-warning',
      info: 'is-info',
      success: 'is-success',
      primary: 'is-primary'
    };

    return (
      <AuthContainer>
        <GlobalNotifications styleMap={NotificationsStyleMap} />
        {this.props.children}
      </AuthContainer>
    );
  }
});

export default Main;
