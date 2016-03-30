import React from 'react';
import { connect } from 'react-redux';
import UserMessages from '../components/UserMessages';
import { filterMessages } from '../actions/index';

const mapStateToProps = (state) => {
  const url = window.location.href;
  const user = url.slice(url.lastIndexOf('/') + 1);
  return {
    messages: state.messages.messages.filter(message => message.user === user),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterUserMessages(username){
      dispatch(filterMessages(username))
    }
  }
}

// const GetMessages = connect(mapStateToProps)(Messages);

export default connect(mapStateToProps, mapDispatchToProps)(UserMessages);