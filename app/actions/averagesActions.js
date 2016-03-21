import { getAvgMessagesByHour } from './queries';

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
  return getAvgMessagesByHour(date)
    .then(averages => dispatch(receiveAverages(averages, 'BY_HOUR', date)))
    .catch(err => console.log(err));
};
