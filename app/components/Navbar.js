/* eslint-disable */
import React from 'react';

const Navbar = React.createClass({
  render: function(){
    console.log('NAVBAR', this)
    return <div> There are new {this.props.messages} messages</div>
  }
})



export default Navbar;