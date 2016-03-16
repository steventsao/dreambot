import React from 'react';
import ReactRouter from 'react-router';
import styles from '../styles';
import MessagesContainer from '../containers/MessagesContainer';
import GraphContainer from '../containers/GraphContainer';
import NavbarContainer from '../containers/NavbarContainer';

const Home = React.createClass({
  render: function () {
    return (
      <div>
        <NavbarContainer />
        <h1 style={styles.title}>Dream Bot</h1>
        <MessagesContainer />
        <GraphContainer />
      </div>
    );
  }
});


export default Home;
