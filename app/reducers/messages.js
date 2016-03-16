import {REQUEST_MESSAGES, fetchMessages, 
  RECEIVE_MESSAGES, ADD_MESSAGE} from '../actions/index';

// TODO: convert state to an object to enhance description of state
// ie. isFetching and time stamp of messages received.
export default function messages(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return state.concat(action.message);
    case RECEIVE_MESSAGES:
      return state.concat(action.messages)
    default:
      return state;
  }
}