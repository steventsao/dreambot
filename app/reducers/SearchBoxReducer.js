import { requestSearch } from '../actions/index';

let initialState = {
  inputField: '',
  placeHolder: 'Ask Dream Bot Anything'
}


// TODO: Insert a payload somewhere to display query results
export default SearchBox = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_SEARCH':
      state.inputField = '';
    default:
      state.inputField = '';
  }
}