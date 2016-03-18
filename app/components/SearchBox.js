import React from 'react';

const SearchBox = ({detectChange}) => {
  return (
    <input onChange={detectChange}className="input is-text-centered" type="text" placeholder="Ask Dream Bot Anything" />
    );
};

export default SearchBox;