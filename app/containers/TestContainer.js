import React from 'react';
import { connect } from 'react-redux';

import Test from '../components/Test';

const TestContainer = React.createClass({
  render() {
    return (
      <Test {...this.props} />
    );
  }
});

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TestContainer);
