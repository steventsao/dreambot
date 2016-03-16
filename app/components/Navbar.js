/* eslint-disable */
import React from 'react';

const Navbar = ({messages}) => {
  let analytics = messages.reduce((acc, message) => {
    acc.totalSentiment += message.score;
    if (message.classification) {
      acc.topics[message.classification] = acc.topics[message.classification]
      ? acc.topics[message.classification] + 1
      : 1;
    }
    return acc;
  }, {totalSentiment: 0, topics: {}});
  
  let topThreeTopics = Object.keys(analytics.topics).sort( (a, b) => {
    return analytics.topics[b] - analytics.topics[a];
  }).slice(0,3).join(', ');

  return (
    <div>
      <div> {messages.length} new messages </div>
      <div> {analytics.totalSentiment} sentiment points </div>
      <div> { (analytics.totalSentiment / messages.length).toFixed(1) } in average </div>
      <div> {topThreeTopics} are trending. </div>
    </div>
    )
}


export default Navbar;