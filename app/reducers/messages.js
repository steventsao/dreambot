export default function messages(state = ['HELLO WORLD'], action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.concat(action.msg);
    default:
      return state;
  }
}