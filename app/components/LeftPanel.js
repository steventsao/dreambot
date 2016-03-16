import React from 'react';
import css from '../styles/bulma.css';
const LeftPanel = ({}) => {
  return (
    <nav className="menu"> 
      <p className="menu-heading is-primary is-fullwidth">
      This is the user panel 
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