export default function graphReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return state.concat(action.msg);
    default:
      return state;
  }
}