import { combineReducers } from 'redux';
import messages from './messages';
import SearchBoxReducer from './SearchBoxReducer';
import averages from './averagesReducer';
import notifications from './notificationsReducer';

const rootReducer = combineReducers({
  messages,
  SearchBoxReducer,
  averages,
  notifications
});

export default rootReducer;

