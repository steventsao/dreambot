import React from 'react';

const Test = React.createClass({
  render() {
    console.log('PROPS: ', this.props);
    return (
      <div>hello world</div>
    );
  }
});

export default Test;
