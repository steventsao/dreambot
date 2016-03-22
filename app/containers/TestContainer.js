import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Graph from '../components/Graph';
import Test from '../components/Test';

import { getHoursIfNeeded } from '../actions';

const TestContainer = React.createClass({
  componentDidMount() {
    const { displayedDate } = this.props;
    this.props.dispatch(getHoursIfNeeded(displayedDate));
  },

  getAverages(date) {
    this.props.dispatch(getHoursIfNeeded(date));
  },

  render() {
    const { displayedDate: { year, month, day }, available } = this.props;
    const key = `${year}-${month}-${day}`;
    const labels = available[key] && available[key].data.map(obj => moment().hour(obj.group).format('hA'));
    const data = available[key] && available[key].data.map(obj => obj.reduction);
    return (
      <div>
        <Test {...this.props} />
        <Selector onSubmit={this.getAverages} />
        <Graph labels={labels} data={data} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    available: state.averages.byHour.available,
    displayedDate: state.averages.byHour.displayedDate
  };
}

export default connect(mapStateToProps)(TestContainer);


const Selector = React.createClass({
  handleClick() {
    this.props.onSubmit({
      year: Number(this._year.value),
      month: Number(this._month.value),
      day: Number(this._day.value)
    });
  },

  render() {
    return (
      <div>
        <input type="input" placeholder="year" defaultValue="2016" ref={ref => this._year = ref} />
        <input type="input" placeholder="month" ref={ref => this._month = ref} />
        <input type="input" placeholder="day" ref={ref => this._day = ref} />
        <button type="submit" onClick={this.handleClick}>submit</button>
      </div>
    );
  }
});
