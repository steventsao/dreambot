/* global describe, it, expect, jest, beforeEach */

//FIXME: Unmocking the following modules trigger error with __esModule being redefined.

// jest.autoMockOff();
  // .unmock('../app/actions/index')
  // .unmock('redux')
  // .unmock('redux-thunk')
  // .unmock('redux-mock-store')
  // .unmock('../app/actions/queries')
  // .unmock('../app/store/configureStore');

// var getMessageVolume = require.requireActual('../app/actions/index').getMessageVolume;



// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import { getWordCount } from '../app/actions/index';
// import nock from 'nock';


// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// const expectedActions = {
//   type: 'RECEIVE_WORD_COUNT',
//   words: { hello: 3, bob: 1 }
// };

// describe('Queries to Rethink', () => {
//   it('fetches for words', (done) => {
//     const store = mockStore(
//       { dict: {} },
//       expectedActions,
//       done
//       );
//     store.dispatch(getWordCount());
//   });
// });


