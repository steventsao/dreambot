jest.unmock('../app/actions/messagesActions');

import { addMessage } from '../app/actions/messagesActions';

describe('Messages Actions', () => {

  it('should add message', () => {

    expect(addMessage('sup')).toEqual(
    {
      type: 'ADD_MESSAGE',
      message: 'sup',
    })
  })
});


// why is this so slow?

