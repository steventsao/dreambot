import React from 'react';

const CatchContainer = React.createClass({
  componentDidMount(){
    console.log('THE TOKEN IS: ', this.props.location.query.token);
    window.localStorage.setItem('token', this.props.location.query.token)
  },

  render() {
    return (
      <div>Catching...</div>
    );
  }
});

export default CatchContainer;
