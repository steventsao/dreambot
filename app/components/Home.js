import React from 'react';
import ReactRouter from 'react-router';
import MessagesContainer from '../containers/MessagesContainer';
import GraphContainer from '../containers/GraphContainer';
import NavbarContainer from '../containers/NavbarContainer';
import LeftPanelContainer from '../containers/LeftPanelContainer';

const Home = React.createClass({
  render: function () {
    return (
      <div className="container is-fluid">
        <NavbarContainer/>
        <h1 className="control">
          <input className="input is-text-centered" type="text" placeholder="Ask Dream Bot Here..."/>
        </h1>
        <div className='columns'>
          <div className="column is-2">
            <LeftPanelContainer />
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
