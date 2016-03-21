import { combineReducers } from 'redux';

import { REQUEST_AVERAGES, RECEIVE_AVERAGES } from '../actions';

function byHour(state = { isFetching: false, averages: {} }, action) {
  if (action.delimiter !== 'BY_HOUR') {
    return state;
  }

  switch (action.type) {
    case REQUEST_AVERAGES:
      return Object.assign({}, state, { isFetching: true });
    case RECEIVE_AVERAGES:
      const { year, month, day } = action.date;
      return Object.assign({}, state, {
        isFetching: false,
        averages: Object.assign({}, state.averages, {
          [`${year}-${month}-${day}`]: action.averages
        })
      });
    default:
      return state;
  }
}

const averagesReducer = combineReducers({
  byHour
});

export default averagesReducer;
