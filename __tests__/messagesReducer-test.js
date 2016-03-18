/* global describe, it, expect, jest */

jest.unmock('../app/reducers/messages');
jest.unmock('redux');

import messages from '../app/reducers/messages';
import { createStore } from 'redux';

describe('messages', () => {
  it('has an initial state of an empty array', () => {
    const store = createStore(messages);
    const state = store.getState();
    expect(state).toEqual([]);
  });
});
