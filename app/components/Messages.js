import React from 'react';
import styles from '../styles';
import css from '../styles/bulma.css';
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
