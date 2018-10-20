import React from 'react';
import Repo from './Repo';

const RepoList = ({repos}) => {
  return (
    <div>
      {repos.map((user, i) => {
        return (
          <Repo key={i} name={user.name[i]} forkCount={user.forkCount[i]} owner={user.owner.login} />
        );
      })}
    </div>
  );
};

export default RepoList;
