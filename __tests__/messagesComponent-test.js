jest.unmock('../app/components/Login');

import TestUtils from 'react-addons-test-utils';
import Login from '../app/components/Login';
import React from 'react';
import ReactDOM from 'react-dom';

describe('Login component', () => {
  let testComponent = TestUtils.renderIntoDocument(
    <Login />
    );
  let loginNode = ReactDOM.findDOMNode(testComponent);

  it('DOM node should exist', () => {
    expect(testComponent).toBeTruthy();
  })

  it('should render default text', () => {
    expect(loginNode.textContent).toEqual(' Login with Github ');
  })
  
})

