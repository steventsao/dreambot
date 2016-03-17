/* eslint-disable */
import React from 'react';

const Navbar = ({messages, analytics}) => {

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
     <div className="navbar-item is-text-centered">
      <p className="title">{analytics.topThreeActiveUsers}</p>
      <p className="heading">{analytics.topThreeActiveUsers.length <= 1 ? 'is' : 'are'} Active</p>
    </div>
    <div className="navbar-item is-text-centered">
      <p className="title">{analytics.topics || 'N/A'}</p>
      <p className="heading">{analytics.topics.length <= 1 ? 'is' : 'are'} Trending</p>
    </div>
    </nav>
    )
}

export default Navbar;
