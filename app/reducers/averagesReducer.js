import { combineReducers } from 'redux';

import { REQUEST_AVERAGES, RECEIVE_AVERAGES } from '../actions';

function byHour(state = { currentDate: '', isFetching: false, averages: {} }, action) {
  if (action.delimiter !== 'BY_HOUR') {
    return state;
  }

  switch (action.type) {
    case REQUEST_AVERAGES:
      return Object.assign({}, state, { isFetching: true });
    case RECEIVE_AVERAGES:
      // wrap this case in a block? see http://eslint.org/docs/rules/no-case-declarations
      const { year, month, day } = action.date;
      return Object.assign({}, state, {
        currentDate: `${year}-${month}-${day}`,
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
