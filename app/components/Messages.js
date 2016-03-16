import React from 'react';
import io from 'socket.io-client';
import css from '../styles/bulma.css';
const socket = io('http://localhost:1337');

const Messages = ({messages}) => {
      return (
        <div> 
      {messages.map(message => {
        return <div className='notification'>{message.text} </div>
      })}

      </div>
    )
}

export default Messages;
