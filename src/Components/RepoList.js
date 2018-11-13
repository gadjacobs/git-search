import React from 'react';
import Repo from './Repo';

const RepoList = ({ repos }) => {
  return (
    <div>
      {repos.map((user, i) => {
        return (
          <Repo
            key={[i]}
            name={repos[i].name}
            owner={repos[i].owner.login}
            description={repos[i].description}
            stagazers={repos[i].stargazers.totalCount}
            forkCount={repos[i].forkCount}
            pushedAt={repos[i].pushedAt}
            primaryLanguage={repos[i].primaryLanguage.name}
            languageColor={repos[i].primaryLanguage.color}
            imageLink={repos[i].owner.avatarUrl}
          />
        );
      })}
    </div>
  );
};

export default RepoList;
