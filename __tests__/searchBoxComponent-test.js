/* global describe, it, expect, jest, beforeEach */

jest
  .unmock('../app/components/SearchBox')
  .unmock('../app/containers/SearchBoxContainer');

import SearchBox from '../app/components/SearchBox';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';


describe('Search Box', () => {
  let testSearchBox = TestUtils.renderIntoDocument(<SearchBox />);

  it('should be composite from React Class', () => {
    expect(TestUtils.isCompositeComponent(testSearchBox)).toBeTruthy();
  });

  let testPlaceHolder = TestUtils.findRenderedDOMComponentWithTag(testSearchBox, 'input');
  it('should have a blank input box', () => {
      expect(testPlaceHolder.textContent).toEqual('');
  });

  it('should reflect change', () => {
    TestUtils.Simulate.change(testSearchBox, {
      target: { value: 'a' }
    });
  });

});
