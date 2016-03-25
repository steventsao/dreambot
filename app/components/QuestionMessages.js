import React from 'react';
import moment from 'moment';
import styles from '../styles';
import { Link } from 'react-router';

const QuestionMessages = ({ messages, filterUserMessages }) => {
  const comparator = (a, b) => { return new Date(b.ts) - new Date(a.ts) };
  const sorted = messages.sort(comparator);
  return (
    <div style={styles.ofprot}>
      {sorted.map(message => {
        let time = moment(new Date(message.ts));
        return (
          <div className="card">
            <div className="card-content">

              <div className="media">
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img src={message.profile.image_24} />
                  </figure>
                </div>

                <div className="media-content">
                  <p className="title is-5">{message.name}</p>
                  <p className="subtitle is-6">{message.profile.real_name? message.profile.real_name : message.profile.email}</p>
                </div>
              </div>

              <div className="content">
                {message.text}
                <br></br>
                <small>
                  <Link to={`/user/${message.user}`}> Details </Link>
                </small>
                <br/>
                <small>{time.fromNow()}</small>
              </div>

            </div>
          </div>
        )
      })}
    </div>
  );
};

export default QuestionMessages;
