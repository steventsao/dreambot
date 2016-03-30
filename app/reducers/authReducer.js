import { ADD_TOKEN } from '../actions/authActions';

const authReducer = (state = {
  token: false,
  routeBeforeAuth: false
}, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

export default authReducer;
