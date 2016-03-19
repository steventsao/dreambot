// TODO: convert state to an object to enhance description of state
// ie. isFetching and time stamp of messages received.
const initialState = {
  messages: [],
  rawMessages: [],
  filter: 'SHOW_ALL',
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return Object.assign({}, state, 
        { 
          rawMessages: [...state.rawMessages, action.message]
        });
    case 'RECEIVE_MESSAGES':
      return Object.assign({}, state,
        {
          messages: action.messages,
          rawMessages: state.rawMessages.concat(action.messages)
        });
    case 'FILTER_MESSAGES':
      return Object.assign({}, state, 
        {
          filter: 'SHOW_USER',
          username: action.username,
          messages: state.rawMessages.filter(message => message.name === action.username)
        });
    case 'SHOW_ALL':
      return Object.assign({}, state,
        { 
          messages: state.rawMessages 
        });
    case 'REQUEST_MESSAGES':
    default:
      return state;
  }
}
