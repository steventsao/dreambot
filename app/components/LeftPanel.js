import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LeftPanel = ({ logout }) => (
  <nav className="menu">
    <p className="menu-heading is-primary is-fullwidth">
      GUEST
    </p>
    <div className="menu-block">
      <Link to="/" className="button is-fullwidth">
        Dashboard
      </Link>
    </div>
    <div className="menu-block">
      <Link to="/questions" className="button is-fullwidth">
        Questions
      </Link>
    </div>
    <div className="menu-block">
      <Link to="/cohort" className="button is-fullwidth">
        Cohort
      </Link>
    </div>
    <div className="menu-block">
      <button className="button is-fullwidth">
        Settings
      </button>
    </div>
    <div className="menu-block">
      <button onClick={logout} className="button is-fullwidth">
        Logout
      </button>
    </div>
  </nav>
);

LeftPanel.propTypes = {
  logout: PropTypes.function
};

export default LeftPanel;
