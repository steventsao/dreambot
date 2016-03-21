import React from 'react';
import { connect } from 'react-redux';

import Test from '../components/Test';

import { getAvgMessagesByHour, getAvgMessagesByDayOfWeek } from '../actions/queries';

const TestContainer = React.createClass({
  componentDidMount() {
    getAvgMessagesByHour({ year: 2016, month: 3, day: 19 })
      .then(data => console.log('DATA: ', data));
  },
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
