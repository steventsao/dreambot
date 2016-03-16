/* eslint-disable */
import React from 'react';

const Navbar = ({messages, analytics}) => {


  return (
    <div>
      <div> {messages.length} new messages </div>
      <div> {analytics.totalSentiment} sentiment points </div>
      <div> { (analytics.totalSentiment / messages.length).toFixed(1) } in average </div>
      <div> {analytics.topics} are trending. </div>
    </div>
    )
}


export default Navbar;