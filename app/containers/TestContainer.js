import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Graph from '../components/Graph';
import Test from '../components/Test';

import { getHoursIfNeeded, notify } from '../actions';

const TestContainer = React.createClass({
  componentDidMount() {
    // Grab today's data by default
    this.props.dispatch(getHoursIfNeeded({
      year: moment().year(),
      month: moment().month() + 1,
      day: moment().date()
    }));
  },

  getAverages(date) {
    this.props.dispatch(getHoursIfNeeded(date));
  },

  act() {
    if (!this.n) {
      this.n = 1;
    }
    this.props.dispatch(notify(`This is message ${this.n}`, 'error'));
    this.n++;
  },

  render() {
    const { labels, data } = this.props;
    return (
      <div>
        <Test {...this.props} />
        <button onClick={this.act}>act</button>
        <Selector onSubmit={this.getAverages} />
        <Graph labels={labels} data={data} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  const { available } = state.averages.byHour
  const { year, month, day } = state.averages.byHour.displayedDate;
  const key = `${year}-${month}-${day}`;
  return {
    labels: available[key] && available[key].data.map(obj => moment().hour(obj.group).format('hA')),
    data: available[key] && available[key].data.map(obj => obj.reduction),
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
