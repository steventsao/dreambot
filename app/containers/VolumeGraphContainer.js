import React from 'react';
import { connect } from 'react-redux';
import VolumeGraph from '../components/VolumeGraph';

const mapStateToProps = (state) => {
  let reverseState = Object.assign({}, state);
  const comparator = (a, b) => { return new Date(a.ts) - new Date(b.ts) };
  reverseState.messages.messages.sort(comparator);
  return {
    labels: reverseState.messages.messages.map(message => new Date(message.ts).toLocaleString()),
    data: reverseState.messages.messages.map(message => message.score),
    dataAvg: reverseState.messages.messages.map(message => message.comparative)
  };
};


export default connect(mapStateToProps)(VolumeGraph);