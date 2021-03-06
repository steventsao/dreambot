import { getMessages } from './queries';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = message => ({ type: ADD_MESSAGE, message });

export const REQUEST_MESSAGES = 'REQUEST_MESSAGES';
export const requestMessages = () => ({ type: REQUEST_MESSAGES });

export const FILTER_MESSAGES = 'FILTER_MESSAGES';
export const filterMessages = username => ({ type: FILTER_MESSAGES, username });

export const FILTER_SEARCH_RESULTS = 'FILTER_SEARCH_RESULTS';
export const filterSearchResults = messages => (
  { type: FILTER_SEARCH_RESULTS, messages: messages.data }
);

export const disableFilterMessages = () => ({ type: 'SHOW_ALL' });

export const IS_FETCHING_MESSAGES = 'IS_FETCHING_MESSAGES';
export const isFetchingMessages = () => ({ type: IS_FETCHING_MESSAGES });

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const receiveMessages = messages => ({ type: RECEIVE_MESSAGES, messages });

export const fetchMessages = () => dispatch => {
  dispatch(requestMessages());
  return getMessages()
    .then(messagesReceived => dispatch(receiveMessages(messagesReceived)))
    .catch(err => console.log(err));
};

