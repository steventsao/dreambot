import { connect } from 'react-redux';
import React from 'react';
import Navbar from '../components/Navbar';
import _ from 'lodash';

const getAnalytics = (messages) => {
  let analytics = messages.reduce((acc, message) => {
    acc.totalSentiment += message.score;
    if (message.classification) {
      acc.topics[message.classification] = acc.topics[message.classification]
      ? acc.topics[message.classification] + 1
      : 1;
    }
    if (message.name) {
      acc.names[message.name] = acc.names[message]
      ? [...acc.names[message], message]
      : [];
    }

    return acc;
  }, { names: {}, totalSentiment: 0, topics: {} });

  let mostActiveUsers = Object.keys(analytics.names).sort((a, b) =>
    analytics.names[b].length - analytics.names[a].length
  );

  analytics.mostActiveUsers = mostActiveUsers;

  return analytics;
};

let mapStateToProps = (state) => {
  return {
    messages: state.messages.messages,
    analytics: Object.assign({}, getAnalytics(state.messages.messages), {
      topics: Object.keys(state.wordCount).map(key => ({ [key]:state.wordCount[key] } ))
      .sort((a, b) => b[Object.keys(b).join('')] - a[Object.keys(a).join('')])
      .slice(0,3)
      .map(pair => Object.keys(pair).join(''))
    })
  }
};


export default connect(mapStateToProps)(Navbar);
