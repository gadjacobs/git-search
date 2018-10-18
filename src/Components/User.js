import React from 'react';
import 'tachyons';

const User = () => {
  return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        
      <img
        alt="User"
        src={`https://avatars3.githubusercontent.com/u/13969732?s=460&v=4`}
      />
      <div>
        <h2>Gad Jacobs</h2>
        <p className="tc">
          <span className="ph3">Repos: 216</span>{' '}
          <span className="ph3">Stars: 34</span>{' '}
        </p>
      </div>
    </div>
  );
};

export default User;
