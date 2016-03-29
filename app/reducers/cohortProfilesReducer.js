const initialState = {
  profiles: [],
  members: []
};

function cohortProfilesReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_COHORT_PROFILES':
      return Object.assign({}, state,
        {
          members: action.data.members,
          profiles: action.data.profiles
        });
    default:
      return state;
  }
}

export default cohortProfilesReducer;
