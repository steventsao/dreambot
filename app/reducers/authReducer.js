import {
  ADD_TOKEN,
  REMOVE_TOKEN,
  // SET_PREVIOUS_ROUTE
} from '../actions/authActions';

const authReducer = (state = {
  token: false,
  routeBeforeAuth: false
}, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return { ...state, token: action.token };
    case REMOVE_TOKEN:
      return { ...state, token: false };
    // case SET_PREVIOUS_ROUTE:
    //   return { ...state, routeBeforeAuth: action.route };
    default:
      return state;
  }
};

export default authReducer;
