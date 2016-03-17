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
      if (message.name) {
        acc.names[message.name] = acc.names[message]
        ? [...acc.names[message], message]
        : [];
      }

      return acc;
    }, {names: {}, totalSentiment: 0, topics: {}});
  
    let topThreeTopics = Object.keys(analytics.topics).sort( (a, b) => {
      return analytics.topics[b] - analytics.topics[a];
    }).slice(0,3).join(', ');

    let topThreeActiveUsers = Object.keys(analytics.names).sort( (a, b) => {
      return analytics.names[b].length - analytics.names[a];
    })
    analytics.topics = topThreeTopics;
    analytics.topThreeActiveUsers = topThreeActiveUsers;

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