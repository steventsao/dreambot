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
  return {
    labels: state.messages.messages.map(message => new Date(message.ts).toLocaleDateString()),
    data: state.messages.messages.map(message => message.score ),
    dataAvg: state.messages.messages.map(message => message.comparative)
  };
};


export default connect(mapStateToProps)(Graph);

