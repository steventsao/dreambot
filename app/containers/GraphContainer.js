import React from 'react';
import { connect } from 'react-redux';
import Graph from '../components/Graph';

const GraphContainer = React.createClass({
  render: function() {
    return (
      <Graph />
    )
  }
})

const mapStateToProps = (state) => {
  return state;
}

const GetGraph = connect(mapStateToProps)(GraphContainer);

export default GetGraph;