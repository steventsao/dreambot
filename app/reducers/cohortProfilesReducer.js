const initialState = {
  profiles: {},
  members: [],
  wordCount: [],
  orderByDesc: true,
  filter: 'wordCount',
};

function cohortProfilesReducer(state = initialState, action) {
  let sortUsersByEngagement = (members, profiles, sortByDesc) => {
    return members.sort((a, b) => {
      if (sortByDesc) {
        return (profiles[b].wordCount || 0 ) - (profiles[a].wordCount || 0);
      } else {
        return (profiles[a].wordCount || 0 ) - (profiles[b].wordCount || 0);
      }
    });
  };
  let sortUsersByMessageLen = (members, profiles, sortByDesc) => {
    return members.sort((a, b) => {
      if (sortByDesc) {
        return (profiles[b].wordCount / profiles[b].messageCount) || 0 - (profiles[a].wordCount / profiles[a].messageCount) || 1;
      } else {
        return (profiles[a].wordCount / profiles[a].messageCount)|| 0 - (profiles[b].wordCount / profiles[b].messageCount) || 1;
      }
    });
  };

  let calculateTerse = (members, profiles) => {
    members.forEach(id => {
      if(profiles[id]) {
        profiles[id].terse = profiles[id].wordCount / (profiles[id].messagesCount || 1);
      }});
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
      return Object.assign({}, state, { members: sortUsersByEngagement(action.members, action.profiles, state.orderByDesc), orderByDesc: !state.orderByDesc, filter: action.filter });
    case 'SORT_USER_BY_MESSAGE_LEN':
      return Object.assign({}, state, { members: sortUsersByMessageLen(action.members, action.profiles, state.orderByDesc), orderByDesc: !state.orderByDesc, filter: action.filter });
    default:
      return state;
  }
}

export default cohortProfilesReducer;

