// import { } from '../actions/authActions';

// This is kinda breaking the "purity" of the reducer
// Might there be a better way to do this?
const initialState = {
  token: window.localStorage.get('token') || false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
