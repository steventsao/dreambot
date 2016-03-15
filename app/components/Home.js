import React from 'react';
import ReactRouter from 'react-router';
import styles from '../styles';
import Graph from '../components/Graph';
import Navbar from '../components/Navbar';
const Home = React.createClass({
  render: function () {
    return (
      <div style={styles.title}>
        <h1>Dream Bot</h1>
        <Graph />
      </div>
    );
  }
});

export default Home;
