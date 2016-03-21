import { combineReducers } from 'redux';
import moment from 'moment';

import { REQUEST_AVERAGES, RECEIVE_AVERAGES } from '../actions';

const initialState = {
  displayedDate: {
    year: moment().year(),
    month: moment().month() + 1,
    day: moment().date()
  },
  isFetching: false,
  averages: {}
};

function byHour(state = initialState, action) {
  if (action.delimiter !== 'BY_HOUR') {
    return state;
  }

  switch (action.type) {
    case REQUEST_AVERAGES:
      return { ...state, isFetching: true };
    case RECEIVE_AVERAGES:
      // wrap this case in a block? see http://eslint.org/docs/rules/no-case-declarations
      const { year, month, day } = action.date;
      return { ...state,
        displayedDate: { ...state.displayedDate, year, month, day },
        isFetching: false,
        averages: { ...state.averages, [`${year}-${month}-${day}`]: action.averages }
      };
    default:
      return state;
  }
}

const averagesReducer = combineReducers({
  byHour
});

export default averagesReducer;
