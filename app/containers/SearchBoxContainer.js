import { connect } from 'react-redux';
import React from 'react';
import SearchBox from '../components/SearchBox';
import { filterMessages, disableFilterMessages } from '../actions/index';

const detectChange = () => {
  console.log('Detecting changes...');
}

// const handleKeyPress = (input) => {
//     console.log(input);
//     fetchMessages(input)
//     .then()
//     console.log('****************');
// };

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    detectChange,
    handleKeyPress: (input) => {
      if (input) {
        dispatch(filterMessages(input));
      } else if (!input.length){
        console.log('no length')
        dispatch(disableFilterMessages())
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);