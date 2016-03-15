import React from 'react';
import ReactRouter from 'react-router';
import styles from '../styles';
import Graph from '../components/Graph';
import NavbarContainer from '../containers/NavbarContainer';

const Home = React.createClass({
  render: function () {
    return (
      <div style={styles.title}>
        <NavbarContainer/>
        <h1>Dream Bot</h1>
        <Graph />
      </div>
    );
  }
});


export default Home;
