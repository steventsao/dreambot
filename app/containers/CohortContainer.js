import React from 'react';
import { connect } from 'react-redux';
import Cohort from '../components/Cohort';
import { getCohortProfiles, receiveCohortProfiles, receiveWordCountByUser, sortUsersByEngagement } from '../actions/userProfileActions';
import { queryCohortProfiles, queryWordCountByUser } from '../actions/queries';
import LeftPanelContainer from '../containers/LeftPanelContainer';
import { getWordCountByUser } from '../actions/userProfileActions';

let CohortContainer = React.createClass({
  componentWillMount() {
    this.props.getCohort();
    this.props.handleWordCountByUser();
  },
  handleWordCountByUser() {
    this.props.sortWordCountByUser(this.props.members, this.props.profiles);
  },
  render() {
    let navbarStyle = 'navbar-item button is-large is-info is-outlined';
    return (
      <div className="container is-fluid">
        <nav className="navbar">
          <p className={navbarStyle} onClick={this.handleWordCountByUser}><a>Most Engaged</a></p>
          <p className={navbarStyle}><a>Most Emoji'ed</a></p>
          <p className={navbarStyle}><a>Most blah blah</a></p>
        </nav>
        <div className="columns">
          <div className="column is-2">
            <LeftPanelContainer />
          </div>
          <div className="column">
            <Cohort
              members={this.props.members}
              profiles={this.props.profiles}
            />
          </div>
        </div>
      </div>
      );
  }
});

let mapStateToProps = (state) => {
  state.cohortProfiles.wordCount.forEach(member => {
    if (state.cohortProfiles.profiles[member.group]) {
      state.cohortProfiles.profiles[member.group].wordCount = member.reduction;
    }
  });


  return { profiles: state.cohortProfiles.profiles, members: state.cohortProfiles.members };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getCohort() {
      let profileObj = {
        members: [],
        profiles: {}
      };
      // FIXME: Colton's "U0S27FI8Z" User ID does not match with his "U0S1PNSBY" ID in db 
      queryCohortProfiles(data => {
        profileObj.members = data.data.members;
        data.data.profiles.forEach(student => {
          profileObj.profiles[student.id] = student;
        });
        dispatch(receiveCohortProfiles(profileObj));
      });
    },
    handleWordCountByUser() {
      dispatch(getWordCountByUser());
    },
    sortWordCountByUser(members, profiles) {
      dispatch(sortUsersByEngagement(members, profiles));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CohortContainer);

// export default connect(mapStateToProps, mapDispatchToProps)(Cohort);