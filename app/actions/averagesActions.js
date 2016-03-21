import { getAvgMessagesByHour } from './queries';

export const REQUEST_AVERAGES = 'REQUEST_AVERAGES';
export const requestAverages = delimiter => (
  { type: REQUEST_AVERAGES, delimiter }
);

export const RECEIVE_AVERAGES = 'RECEIVE_AVERAGES';
export const receiveAverages = (data, delimiter, date) => (
  { type: RECEIVE_AVERAGES, data, delimiter, date }
);

export const CHANGE_DATE = 'CHANGE_DATE';
export const changeDate = (delimiter, date) => (
  { type: CHANGE_DATE, delimiter, date }
);

export const getHours = date => dispatch => {
  dispatch(requestAverages('BY_HOUR'));
  return getAvgMessagesByHour(date)
    .then(data => dispatch(receiveAverages(data, 'BY_HOUR', date)))
    .catch(err => console.log(err));
};

function shouldFetchHours(state, { year, month, day }) {
  const { available } = state.averages.byHour;
  if (!available[`${year}-${month}-${day}`]) {
    return true;
  }
  return false;
}

export const getHoursIfNeeded = date =>
  (dispatch, getState) => {
    if (shouldFetchHours(getState(), date)) {
      return dispatch(getHours(date));
    }
    return dispatch(changeDate('BY_HOUR', date));
  };
