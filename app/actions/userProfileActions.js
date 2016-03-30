import { queryCohortProfiles, queryWordCountByUser } from './queries';
export const REPLACE_PROFILE = 'REPLACE_PROFILE';
export function replaceProfile(data) {
  return { type: REPLACE_PROFILE, data };
}

export function receiveCohortProfiles(data) {
  return {
    type: 'RECEIVE_COHORT_PROFILES',
    data,
  };
}

export function getCohortProfiles() {
  return function (dispatch) {
    queryCohortProfiles()
    .then(data => {
      let profileObj = {};
      data.forEach(student => {
        profileObj[student.id] = student;
      });
      dispatch(receiveCohortProfiles(profileObj));
    })
    .catch(err => { console.log(err); });
  };
}

export function receiveWordCountByUser(data) {
  return {
    type: 'RECEIVE_WORD_COUNT_BY_USER',
    data,
  };
}

export function getWordCountByUser() {
  return function (dispatch) {
    queryWordCountByUser()
    .then(data => dispatch(receiveWordCountByUser(data)))
    .catch(err => console.log(err));
  };
}

export function sortUsersByEngagement(members, profiles) {
  return {
    type: 'SORT_USERS_BY_ENGAGEMENT',
    members, 
    profiles
  };
}
  