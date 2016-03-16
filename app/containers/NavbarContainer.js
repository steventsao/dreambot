import {connect} from 'react-redux';
import React from 'react';
import Navbar from '../components/Navbar';

let NavbarContainer = React.createClass({
  createClickHandler() {
      console.log(`There are ${this.props.messages.length} messages`);
  },
  render() {
    const { messages } = this.props;
    return (
      <Navbar printMsg={this.createClickHandler} messages={messages}/>
      )
  }
})

let mapStateToProps = (state) => {
  return state;
  // return {
  //   messages: state.messages
  // }
}

export default connect(mapStateToProps)(NavbarContainer)