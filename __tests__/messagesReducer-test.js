/* global describe, it, expect, jest */

jest.unmock('../app/reducers/messages');
jest.unmock('redux');

import messages from '../app/reducers/messages';
import { createStore } from 'redux';

describe('messages', () => {
  it('PLACEHOLDER', () => {
    expect(true).toEqual(true);
  });
});
