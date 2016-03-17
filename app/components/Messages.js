import React from 'react';

const Messages = ({ messages }) => {
  const comparator = (a, b) => { return b.ts - a.ts };
  const sorted = messages.sort(comparator);
  return (
    <div>
      {sorted.map(message => {
        return <div className="notification">{message.name}:{message.text} </div>;
      })}
    </div>
  );
};

export default Messages;
