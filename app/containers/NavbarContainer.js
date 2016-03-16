import {connect} from 'react-redux';
import React from 'react';
import Navbar from '../components/Navbar';

let NavbarContainer = React.createClass({
  getAnalytics() {
    let analytics = this.props.messages.reduce((acc, message) => {
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

    analytics.topics = topThreeTopics;

    return analytics;
  },
  render() {
    const { messages } = this.props;
    const analytics = this.getAnalytics();
    return (
      <Navbar messages={messages} analytics={analytics} />
      )
  }
})

let mapStateToProps = (state) => state;


export default connect(mapStateToProps)(NavbarContainer)