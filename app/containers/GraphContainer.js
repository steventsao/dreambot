import React from 'react';
import { connect } from 'react-redux';
import Graph from '../components/Graph';
// import d3 from 'd3';

// const GraphContainer = React.createClass({
//   render: function() {

//     return (
//       <Graph labels={this.props.labels} data={this.props.data} dataAvg={this.props.dataAvg}/>
//     )
//   }
// })

const mapStateToProps = (state) => {
 let reverseState = Object.assign({}, state);
  return {
    labels: reverseState.messages.messages.map(message => new Date(message.ts)).sort((a, b) => a - b).map(a => a.toLocaleDateString()),
    data: reverseState.messages.messages.map(message => message.score),
    dataAvg: reverseState.messages.messages.map(message => message.comparative)
  };
};


export default connect(mapStateToProps)(Graph);

