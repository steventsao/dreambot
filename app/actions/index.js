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

export const filterMessages = (username) => {
  return {
    type: 'FILTER_MESSAGES',
    username
  }
}

export const filterSearchResults = (messages) => {
  return {
    type: 'FILTER_SEARCH_RESULTS',
    messages: messages.data
  }
}


export const disableFilterMessages = () => {
  console.log('disabling...');
  return {
    type: 'SHOW_ALL'
  }
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

// @return Object of messages Array
export const fetchMessages = () => {
  return (dispatch) => {
    // starts get request to API
    dispatch(requestMessages())
     return axios.get(`/api/messages/`)
     .then( (messagesReceived) => {
        dispatch(receiveMessages(messagesReceived))
     })
     .catch( (err) => {
        console.log(err);
     })
  }
}

export const searchKeyword = (input) => {
  console.log('searching...')
  return (dispatch) => {
    return axios.get(`/api/messages/search?word=${input}`)
      .then(messagesReceived => {
        dispatch(receiveMessages(messagesReceived))
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const requestSearch = (query) => {
  return {
    type: 'REQUEST_SEARCH',
    query
  }
}