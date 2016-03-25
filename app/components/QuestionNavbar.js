/* eslint-disable */
import React from 'react';

const QuestionNavbar = ({ messages, analytics, users }) => {
  //console.log(JSON.stringify(analytics));
  return (
    <nav className="navbar">
     <div className="navbar-item is-text-centered">
      <p className="title">{messages.length}</p>
      <p className="heading">Total Questions</p>
    </div>
     <div className="navbar-item is-text-centered">
      <p className="title">{ (analytics.totalSentiment / messages.length).toFixed(1) }</p>
      <p className="heading">Average Sentiment</p>
    </div>
     <div className="navbar-item is-text-centered">
      <p className="title">{ users.join(', ')}</p>
      <p className="heading">{ users.length <= 1 ? 'is' : 'are'} Active</p>
    </div>
    <div className="navbar-item is-text-centered">
      <p className="title">{analytics.topics.join(', ') || 'N/A'}</p>
      <p className="heading">{analytics.topics.length <= 1 ? 'is' : 'are'} Trending</p>
    </div>
    </nav>
    )
}

export default QuestionNavbar;