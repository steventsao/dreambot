import React from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:8090');

const Graph = React.createClass({
  getInitialState: function() {
    return {
      messages: []
    }
  },
  componentDidMount: function() {
    socket.on('test', (data) => {
      let messages = this.state.messages.concat(data.new_val);
      this.setState({messages: messages})
      console.log(this.state);
    });
  },
  render : function() {
    return (
      <div> Hello from DreamBot:

      {this.state.messages.map(message => {
        return <span> <br/> {message.text} </span>
      })}

      </div>
    )
  }
})

export default Graph;