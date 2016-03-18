import React from 'react';
import { connect } from 'react-redux';
import Messages from '../components/Messages';

// const MessagesContainer = React.createClass({
//   render: function() {
//     return (
//       <Messages messages={this.props.messages}/>
//     )
//   }
// })

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
};


// const GetMessages = connect(mapStateToProps)(Messages);

export default connect(mapStateToProps)(Messages);