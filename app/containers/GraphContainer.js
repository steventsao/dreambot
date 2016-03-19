import React from 'react';
import { connect } from 'react-redux';
import Graph from '../components/Graph';


const mapStateToProps = (state) => {
  return {
    labels: state.messages.messages.map(message => new Date(message.ts * 1000).toLocaleDateString()),
    data: state.messages.messages.map(message => message.score ),
    dataAvg: state.messages.messages.map(message => message.comparative)
  };
};


export default connect(mapStateToProps)(Graph);

