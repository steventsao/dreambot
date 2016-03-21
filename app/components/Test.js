import React from 'react';

const Test = React.createClass({
  render() {
    return (
      <div>hello world: {JSON.stringify(this.props.averages)}</div>
    );
  }
});

export default Test;
