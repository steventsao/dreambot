import React from 'react';
import { Link } from 'react-router';
import styles from '../styles';

const Main = React.createClass({
  render: function () {
    return (
        <div className='main-container' >
          {this.props.children}
        </div>
      )
  }
})

export default Main;
