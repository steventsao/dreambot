import React from 'react';
import { connect } from 'react-redux';
import Graph from '../components/Graph';

const GraphContainer = React.createClass({
  render: function() {
    return (
      <Graph labels={this.props.labels} data={this.props.data} dataAvg={this.props.dataAvg} />
    )
  }
})

const mapStateToProps = (state) => {
  return {
    labels: state.messages.map( (message) => new Date(message.ts * 1000).toLocaleDateString()),
    data: state.messages.map( (message) => message.score ),
    dataAvg: state.messages.map( (message) => message.comparative )
  };
};

const GetGraph = connect(mapStateToProps)(GraphContainer);

export default GetGraph;