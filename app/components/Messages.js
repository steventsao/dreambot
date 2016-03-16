import React from 'react';
import styles from '../styles';

const Messages = ({messages}) => {
      return (
        <div style={styles.messages}> Hello from DreamBot:

      {messages.map(message => {
        return (
          <span> <br/> <span style={styles.user}> {message.user}</span>: {message.text} </span>
        )
      })}

      </div>
    )
}

export default Messages;
