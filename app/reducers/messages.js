export default function messages(state = [1], action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.concat(action.msg);
    default:
      return state;
  }
}