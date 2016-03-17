import React from 'react';

const LeftPanel = ({}) => {
  return (
    <nav className="menu">
      <p className="menu-heading is-primary is-fullwidth">
      GUEST
      </p>
      <div className="menu-block">
        <button className="button is-fullwidth">
          Profile
        </button>
      </div>
      <div className="menu-block">
      <button className="button is-fullwidth">
        Messages</button>
      </div>
      <div className="menu-block">
      <button className="button is-fullwidth">
        Settings</button>
      </div>
      <div className="menu-block">
      <button className="button is-fullwidth">
        Logout</button>
      </div>
    </nav>
    )
}

export default LeftPanel;
