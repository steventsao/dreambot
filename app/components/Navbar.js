/* eslint-disable */
import React from 'react';
import {createStore} from 'redux';
import io from 'socket.io-client';
const socket = io('http://localhost:1337');

export let navReducer = (state = 0, action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
    return state +1;
    default:
    return state;
  }
}

let navStore = createStore(navReducer);
let log = () => {
  console.log(`There are ${navStore.getState()} new messages`);
}
navStore.subscribe(log);

socket.on('test', (data) => {
    navStore.dispatch({type: 'NEW_MESSAGE'});
});

const Navbar = React.createClass({
  render: function(){
    return <div> There are {this.props.messageCount} new messages</div>
  }
})


export default Navbar;