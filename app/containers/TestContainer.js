import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Test from '../components/Test';

import { getAveragesByHour } from '../actions';

const TestContainer = React.createClass({
  componentDidMount() {
    const { year, month, day } = {
      year: moment().year(),
      month: moment().month() + 1,
      day: moment().date()
    };
    this.props.dispatch(getAveragesByHour({ year, month, day }));
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
