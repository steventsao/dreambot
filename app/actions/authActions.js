import { browserHistory } from 'react-router';

export const ADD_TOKEN = 'ADD_TOKEN';
export const addToken = token => ({ type: ADD_TOKEN, token });

export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const removeToken = token => ({ type: REMOVE_TOKEN, token });

// this is currently useless as our login flow makes the user
// leave the page and go to github, completely reloading app on return

// export const SET_PREVIOUS_ROUTE = 'SET_PREVIOUS_ROUTE';
// export const setPreviousRoute = route => ({ type: SET_PREVIOUS_ROUTE, route });

const saveToken = (token) => {
  window.localStorage.setItem('token', token);
};

const deleteToken = () => {
  window.localStorage.removeItem('token');
};

export const redirectIfNoToken = () => dispatch => {
  if (window.localStorage.token) {
    dispatch(addToken(window.localStorage.token));
  } else {
    browserHistory.push('/login');
  }
};

export const addTokenIfExists = token => dispatch => {
  if (token) {
    saveToken(token);
    dispatch(addToken(token));
    browserHistory.push('/app');
  } else {
    // TODO: add the reason for redirecting the user to login as a query to the
    //       below path? That way we can inform the user that their login failed
    browserHistory.push('/login');
  }
};

export const logout = () => dispatch => {
  deleteToken();
  dispatch(removeToken());
  browserHistory.push('/login');
};
