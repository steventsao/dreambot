import {connect} from 'react-redux';
import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class NavbarContainer extends Component {
  render() {
    const { messages } = this.props;
    return (
      <Navbar messages={messages}/>
      )
  }
}

let mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(NavbarContainer)