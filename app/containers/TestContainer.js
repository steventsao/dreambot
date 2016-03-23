import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Graph from '../components/Graph';
import Test from '../components/Test';

import { getAveragesByHour } from '../actions';

const TestContainer = React.createClass({
  getDefaultProps() {
    return {
      year: moment().year(),
      month: moment().month() + 1,
      day: moment().date() - 2
    };
  },

  componentDidMount() {
    const { year, month, day } = this.props;
    this.props.dispatch(getAveragesByHour({ year, month, day }));
  },

  getAverages(date) {
    const { year, month, day } = date;
    this.props.dispatch(getAveragesByHour({ year, month, day }));
  },

  render() {
    const { currentDate, averages } = this.props;
    const labels = averages[currentDate] && averages[currentDate].map(obj => moment().hour(obj.group).format('hA'));
    const data = averages[currentDate] && averages[currentDate].map(obj => obj.reduction);
    return (
      <div>
        <Test {...this.props} />
        <Graph labels={labels} data={data} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    averages: state.averages.byHour.averages,
    currentDate: state.averages.byHour.currentDate
  };
}

export default connect(mapStateToProps)(TestContainer);
