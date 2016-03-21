import { combineReducers } from 'redux';
import messages from './messages';
import SearchBoxReducer from './SearchBoxReducer';
import averages from './averagesReducer';

const rootReducer = combineReducers({
  messages,
  SearchBoxReducer,
  averages
});

export default rootReducer;

