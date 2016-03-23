import * as queries from './queries';

export * from './notificationsActions';

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

export const requestSearch = query => ({ type: 'REQUEST_SEARCH', query });

// thunk action creators to enable async calls
// thunk returns functions instead of objects

export const fetchMessages = () => dispatch => {
  dispatch(requestMessages());
  return queries.getMessages()
    .then(messagesReceived => dispatch(receiveMessages(messagesReceived)))
    .catch(err => console.log(err));
};

export const searchKeyword = (input) =>
  dispatch => queries.getSearchResults(input)
    .then(messagesReceived => dispatch(receiveMessages(messagesReceived)))
    .catch(err => console.log(err));


export const REQUEST_AVERAGES = 'REQUEST_AVERAGES';
export const requestAverages = delimiter => (
  { type: REQUEST_AVERAGES, delimiter }
);

export const RECEIVE_AVERAGES = 'RECEIVE_AVERAGES';
export const receiveAverages = (averages, delimiter, date) => (
  { type: RECEIVE_AVERAGES, averages, delimiter, date }
);

export const getAveragesByHour = date => dispatch => {
  dispatch(requestAverages('BY_HOUR'));
  return queries.getAvgMessagesByHour(date)
    .then(averages => dispatch(receiveAverages(averages, 'BY_HOUR', date)))
    .catch(err => console.log(err));
};

export const receiveWordCount = (dict) => (
  {
    type: 'RECEIVE_WORD_COUNT',
    words: dict
  }  
)

export const getWordCount = () => dispatch => {
  return queries.getAllUniqueWords()
    .then(res => {
      let dictionary = {};
      res.forEach(word => {
        if (!dictionary[word]) {
          dictionary[word] = 1;
        } else {
          dictionary[word] = dictionary[word] + 1;
        }
      })
      dispatch(receiveWordCount(dictionary));
    });
}
