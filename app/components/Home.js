import React from 'react';
import ReactRouter from 'react-router';
import MessagesContainer from '../containers/MessagesContainer';
import GraphContainer from '../containers/GraphContainer';
import NavbarContainer from '../containers/NavbarContainer';
import LeftPanel from './LeftPanel';

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
            <GraphContainer />
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
