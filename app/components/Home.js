import React from 'react';
import ReactRouter from 'react-router';
import styles from '../styles';
import MessagesContainer from '../containers/MessagesContainer';
import NavbarContainer from '../containers/NavbarContainer';
import LeftPanel from './LeftPanel';
import css from '../styles/bulma.css';

const Home = React.createClass({
  render: function () {
    return (
      <div className="container is-fluid">
        <NavbarContainer/>
        <h1 className="title is-text-centered" >Dream Bot</h1>
        <div className='columns'>
          <div className="column is-2">
            <LeftPanel />
          </div> 
          <div className="column is-text-centered">
            FOR GRAPHS
          </div> 
          <div className="column is-quarter">
            <MessagesContainer />
          </div>
          </div>
      </div>
    );
  }
});


export default Home;
