/* eslint-disable */
import React from 'react';

const UserNavbar = ({ messages, analytics, users }) => {

  return (
    <nav className="navbar">
     <div className="navbar-item is-text-centered">
      <p className="title">{messages.length}</p>
      <p className="heading">New Messages</p>
    </div>
     <div className="navbar-item is-text-centered">
      <p className="title">{ (analytics.totalSentiment / messages.length).toFixed(1) }</p>
      <p className="heading">Average Sentiment</p>
    </div>
    </nav>
    )
}

export default UserNavbar;
