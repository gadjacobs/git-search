import React from 'react';

const Search = (searchBox, searchChange) => {
  return (
    <div>
      <input
        type="search"
        className="bg-lightest-blue pa3 ba b--green"
        placeholder="Enter a username"
        onChange={() => searchChange}
      />
      {/* <button onClick={()=>searchChange} >Search</button> */}
    </div>
  );
};

export default Search;
