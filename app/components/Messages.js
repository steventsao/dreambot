import React from 'react';
import moment from 'moment';

const Messages = ({ messages }) => {
  const comparator = (a, b) => { return new Date(b.ts) - new Date(a.ts) };
  console.log()
  const sorted = messages.sort(comparator);
  return (
    <div>
      {sorted.map(message => {
        let time = moment(new Date(message.ts));
        return (
          <div className="box">
            <div className="content">
              <p>
              <strong>{message.name}:</strong> {message.text} <small>{time.fromNow()}</small>
              </p>
            </div>
          </div>
          )
      })}
    </div>
  );
};
export default Messages;
