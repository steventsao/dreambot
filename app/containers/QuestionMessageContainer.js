import React from 'react';
import { connect } from 'react-redux';
import QuestionMessages from '../components/QuestionMessages';
import { filterMessages } from '../actions/index';

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages.filter(messages => messages.classification !== undefined)
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionMessages);