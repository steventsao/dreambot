const initialState = {
  profiles: {},
  members: [],
  wordCount: [],
};

function cohortProfilesReducer(state = initialState, action) {
  let sortUsersByEngagement = (members, profiles) => {
    return members.sort((a, b) => {
      return (profiles[b].wordCount || 0 ) - (profiles[a].wordCount || 0);
    });
  };

  switch (action.type) {
    case 'RECEIVE_COHORT_PROFILES':
      return Object.assign({}, state,
        {
          members: action.data.members,
          profiles: action.data.profiles
        });
    case 'RECEIVE_WORD_COUNT_BY_USER':
      return Object.assign({}, state, {
        wordCount: action.data
      });
    case 'SORT_USERS_BY_ENGAGEMENT':
      return Object.assign({}, state, { members: sortUsersByEngagement(action.members, action.profiles)});
    default:
      return state;
  }
}

export default cohortProfilesReducer;

