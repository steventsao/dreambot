import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/routes';

// var io = require('socket.io-client');
// var socket = io('http://localhost:8090')

// socket.on('connection', function() {
//   console.log('connected');
// });

// socket.on('test', function(data) {
//   console.log(data);
// })

// var App = React.createClass({
//   getInitialState: function() {
//     return {
//       n: 0
//     }
//   },

//   componentDidMount: function() {
//     var self = this;
//     socket.on('n', function(data) {
//       console.log(data);
//       self.setState({n: data})
//     })
//   },

//   render: function() {
//     return (
//       <div> the number is: {this.state.n} </div>
//     )
//   }
// })



ReactDOM.render(
  Routes,
  document.getElementById('app')
);
