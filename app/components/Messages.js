import React from 'react';

const Messages = ({ messages }) => {
  return (
    <div>
      {messages.map(message => {
        return <div className="notification">{message.name}:{message.text} </div>;
      })}
    </div>
  );
};

export default Messages;
