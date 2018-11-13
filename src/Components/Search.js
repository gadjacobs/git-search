import React from 'react';

const Search = ({searchBox, SearchChange}) => {
  return (
    <div>
      <input
        type="search"
        className="bg-lightest-blue pa3 ba b--green"
        placeholder="Enter a username"
        onChange={SearchChange}
      />
      {/* <button onClick={()=>searchChange} >Search</button> */}
    </div>
  );
};

export default Search;
