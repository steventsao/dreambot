import axios from 'axios';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = (message) => {
  return {
      type: ADD_MESSAGE,
      message
    }
}

export const REQUEST_MESSAGES = 'REQUEST_MESSAGES';
export const requestMessages = () => {
  return {
    type: REQUEST_MESSAGES
  };
}

export const IS_FETCHING_MESSAGES = 'IS_FETCHING_MESSAGES';
export const isFetchingMessages = () => {
  return {
    type: IS_FETCHING_MESSAGES
  }
}

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages: messages.data
  }
}

// thunk action creators to enable async calls
// thunk returns functions instead of objects

export const fetchMessages = () => {
  return (dispatch) => {
    // starts get request to API
    dispatch(requestMessages())
     return axios.get('/api/messages')
     .then(function(messagesReceived) {
        dispatch(receiveMessages(messagesReceived))
     })
     .catch(function(err) {
        console.log(err);
     })
  }
}