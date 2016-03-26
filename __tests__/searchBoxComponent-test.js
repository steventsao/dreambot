jest
  .unmock('../app/components/SearchBox')
  // .unmock('../app/containers/SearchBoxContainer')

import SearchBox from '../app/components/SearchBox';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';


describe('Search Box', () => {
  let searchBoxInstance = <SearchBox />
  let testSearchBox = TestUtils.renderIntoDocument(searchBoxInstance);

  it('should exist', () => {
    // expect(TestUtils.isDOMComponent(SearchBox())).toBeTruthy();
  });

  it('should have refs', () => {
    console.log(searchBoxInstance.props)
    expect(searchBoxInstance.props).toBeTruthy();
  })

  // it('should default with an empty string', () => {
  //   TestUtils.Simulate.keyDown(node, {key: "Enter", keyCode: 13, which: 13});
  //   expect(testSearchBox)
  // });

  // it('should bind user input', () => {

  // });

})