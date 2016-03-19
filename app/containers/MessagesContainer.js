import React from 'react';
import { connect } from 'react-redux';
import Messages from '../components/Messages';

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages
  }
};

export default connect(mapStateToProps)(Messages);