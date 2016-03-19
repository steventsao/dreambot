import { combineReducers } from 'redux';
import messages from './messages';
import SearchBoxReducer from './SearchBoxReducer';
const rootReducer = combineReducers({
  messages,
  SearchBoxReducer
})

export default rootReducer;

