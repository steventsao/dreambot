import { combineReducers } from 'redux';

import { REQUEST_AVERAGES, RECEIVE_AVERAGES, CHANGE_DATE } from '../actions/averagesActions';

const initialState = {
  displayedDate: {
    year: 0,
    month: 0,
    day: 0
  },
  isFetching: false,
  available: {}
};

function byHour(state = initialState, action) {
  if (action.delimiter !== 'BY_HOUR') {
    return state;
  }

  switch (action.type) {
    case REQUEST_AVERAGES:
      return Object.assign({}, state, { isFetching: true});
    case RECEIVE_AVERAGES:
      // wrap this case in a block? see http://eslint.org/docs/rules/no-case-declarations
      const { year, month, day } = action.date;
      return {
        ...state,
        displayedDate: { ...action.date },
        isFetching: false,
        available: {
          [`${year}-${month}-${day}`]: {
            receivedAt: action.receivedAt,
            data: action.data
          }
        }
      };
    case CHANGE_DATE:
      return { ...state, displayedDate: { ...action.date } };
    default:
      return state;
  }
}

const averagesReducer = combineReducers({
  byHour
});

export default averagesReducer;
