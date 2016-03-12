import React from 'react';
import ReactRouter from 'react-router';
import styles from '../styles';

const Home = React.createClass({
  render: function () {
    return (
      <div style={styles.title}>
        <h1>Dream Bot</h1>
      </div>
    );
  }
});

export default Home;
