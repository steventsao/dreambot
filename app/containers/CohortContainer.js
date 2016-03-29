import React from 'react';
import { connect } from 'react-redux';
import Cohort from '../components/Cohort';
import { getCohortProfiles, receiveCohortProfiles } from '../actions/userProfileActions';
import { queryCohortProfiles } from '../actions/queries';
let CohortContainer = React.createClass({
  componentDidMount(){
    this.props.getCohort()

  },
  render(){
    return (
      <Cohort
        members={this.props.cohortProfiles.members}
        profiles={this.props.cohortProfiles.profiles}
      />)

  }

})


let mapStateToProps = (state) => {
   return state;
}

let mapDispatchToProps = (dispatch) => {
  return {
    getCohort(){
      queryCohortProfiles(data => dispatch(receiveCohortProfiles(data.data)))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CohortContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(Cohort);