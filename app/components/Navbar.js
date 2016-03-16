/* eslint-disable */
import React from 'react';
import styles from '../styles';
import css from '../styles/bulma.css';

const Navbar = ({messages, analytics}) => {

  return (
    <nav className="navbar">
     <div className="navbar-item is-text-centered">
    <p className="title">{messages.length}</p>
    <p className="heading">New Messages</p>
  </div>
     <div className="navbar-item is-text-centered">
    <p className="title">{analytics.totalSentiment}</p>
    <p className="heading">Sentiment Points</p>
  </div>
     <div className="navbar-item is-text-centered">
    <p className="title">{ (analytics.totalSentiment / messages.length).toFixed(1) }</p>
    <p className="heading">Average Sentiment</p>
  </div>
  <div className="navbar-item is-text-centered">
    <p className="title">{analytics.topics}</p>
    <p className="heading">are Trending</p>
  </div>
    </nav>
    )
}

export default Navbar;