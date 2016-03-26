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

  it('should have refs', () => {
    console.log(searchBoxInstance.props)
    expect(searchBoxInstance.props).toBeTruthy();
  })

})