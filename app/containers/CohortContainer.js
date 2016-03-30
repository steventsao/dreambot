import React from 'react';
import { connect } from 'react-redux';
import Cohort from '../components/Cohort';
import { getCohortProfiles, receiveCohortProfiles } from '../actions/userProfileActions';
import { queryCohortProfiles } from '../actions/queries';
import LeftPanelContainer from '../containers/LeftPanelContainer';
let CohortContainer = React.createClass({
  componentDidMount() {
    this.props.getCohort()
  },
  render() {
    return (
      <div className="container is-fluid">
      <nav className="navbar">
        <p className="navbar-item button is-large is-info is-outlined"><a>Most Engaged</a></p>
        <p className="navbar-item button is-large is-info is-outlined"><a>Most Emoji'ed</a></p>
        <p className="navbar-item button is-large is-info is-outlined"><a>Most blah blah</a></p>
      </nav>
      <div className="columns">
        <div className="column is-2">
          <LeftPanelContainer />
        </div>
        <div className="column">
          <Cohort
            members={this.props.cohortProfiles.members}
            profiles={this.props.cohortProfiles.profiles}
          />
        </div>
      </div>
      </div>

      )

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