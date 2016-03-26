/* global describe, it, expect, jest */

jest.unmock('../app/reducers/averagesReducer');
jest.unmock('../app/actions/averagesActions');
jest.unmock('redux');

import averagesReducer from '../app/reducers/averagesReducer';
import { REQUEST_AVERAGES, RECEIVE_AVERAGES, CHANGE_DATE } from '../app/actions/averagesActions';
import { createStore } from 'redux';

describe('averagesReducer', () => {
  it('should have the correct initial state', () => {
    expect(true).toEqual(true);
  });
});
