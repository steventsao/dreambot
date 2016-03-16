export default function graphReducer(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_GRAPH':
      return state.concat(action.msg);
    default:
      return state;
  }
}