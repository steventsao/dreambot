import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render: function () {
    return (
        <div>
          {this.props.children}
        </div>
      )
  }
})

export default Main;
