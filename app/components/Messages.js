import React from 'react';
import styles from '../styles';

const Messages = ({messages}) => {
      return (
        <div style={styles.title}> Hello from DreamBot:

      {messages.map(message => {
        return <span> <br/> {message.text} </span>
      })}

      </div>
    )
}

export default Messages;
