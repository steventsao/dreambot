import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render: function () {
    return (
        <div className='main-container'>
          <Link to="graph">
            <button type='button'> To Graph </button>
          </Link>
          <Link to="/">
            <button type='button'> To Main </button>
          </Link>
          {this.props.children}
        </div>
      )
  }
})

export default Main;
