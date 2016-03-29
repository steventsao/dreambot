import { queryCohortProfiles } from './queries';
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
    .then(data => dispatch(receiveCohortProfiles(data)))
    .catch(err => { console.log(err); });
  };
};