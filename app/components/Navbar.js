/* eslint-disable */
import React from 'react';

const Navbar = ({messages, printMsg}) => {
  return (
      <div> 
        There are new {messages} messages 
        <button onClick={printMsg}> Hello </button>
      </div>

    )
}


export default Navbar;