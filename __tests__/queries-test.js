/* global describe, it, expect, jest */

jest.autoMockOff();

import nock from 'nock';
import { getSearchResults } from '../app/actions/queries';

describe('Queries to Rethink', () => {
  it('Should search words from db', () => {
    let sampleNock = nock('http://localhost:1337')
    .get('/db')
    .reply(200, ['a', 'b', 'c', 'd']);
    getSearchResults('a')
    .then(res => expect(res).toEqual(['a']));

  });
});
