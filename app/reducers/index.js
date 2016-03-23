import { combineReducers } from 'redux';
import messages from './messages';
import SearchBoxReducer from './SearchBoxReducer';
import averages from './averagesReducer';
import notifications from './notificationsReducer';
import wordCount from './wordCountReducer';

const rootReducer = combineReducers({
  messages,
  SearchBoxReducer,
  averages,
  notifications,
  wordCount
});

export default rootReducer;

