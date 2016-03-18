import { connect } from 'react-redux';
import React from 'react';
import SearchBox from '../components/SearchBox';

const detectChange = () => {
  console.log('Detecting changes...');
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    detectChange,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);