import React from 'react';
import moment from 'moment';
import styles from '../styles';
import { Link } from 'react-router';

const Messages = ({ messages, filterUserMessages }) => {
  const comparator = (a, b) => { return new Date(b.ts) - new Date(a.ts) };
  console.log()
  const sorted = messages.sort(comparator);
  return (
    <div style={styles.ofprot}>
      {sorted.map(message => {
        let time = moment(new Date(message.ts));
        return (
          <div className="box">
            <div key={message.id} className="content">
              <p>
              <strong>{message.name}:</strong> {message.text} <small>{time.fromNow()}</small>
              </p>
              <p onClick={()=>{filterUserMessages(message.name)}}> Filter </p>
              <Link to={`/user/${message.user}`}> Details </Link>
            </div>
          </div>
          )
      })}
    </div>
  );
};
export default Messages;
