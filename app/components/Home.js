var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');

var Home = React.createClass({
  render: function () {
    return (
      <div style={styles.title}>
        <h1>Dream Bot</h1>
      </div>
    );
  }
});

module.exports = Home;