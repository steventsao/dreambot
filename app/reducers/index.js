import { combineReducers } from 'redux';
import messages from './messages';

const rootReducer = combineReducers({
  messages
})
console.log('Root Reducer');
console.log(rootReducer.toString());


export default rootReducer;

