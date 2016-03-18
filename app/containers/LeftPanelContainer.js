import React from 'react';
import { connect } from 'react-redux';
import LeftPanel from '../components/LeftPanel';
import { addMessage } from '../actions/index';

// const LeftPanelContainer = React.createClass({
//   printMessage(){
//     let { dispatch } = this.props;
//     dispatch(addMessage('Hello from container'));
//   },
//   componentDidMount(){
//   },
//   render(){
//     return (
//       <LeftPanel  printMessage={ this.printMessage }/>
//       )
//   }
// })

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    printMessage: () => {
      // TODO: replace placeholder to fire actions
      console.log('hello');
      // dispatch(addMessage('Hello from container'));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);