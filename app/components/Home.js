import React from 'react';
import ReactRouter from 'react-router';
import styles from '../styles';
import Graph from '../components/Graph';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

const Home = React.createClass({
  render: function () {
    return (
      <div style={styles.title}>
        <Navbar messages = {this.props.messages}/>
        <h1>Dream Bot</h1>
        <Graph />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Home);
