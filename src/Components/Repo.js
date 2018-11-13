import React from 'react';
import 'tachyons';
import './Repo.css';

const Repo = ({
  name,
  stagazers,
  description,
  owner,
  pushedAt,
  primaryLanguage,
  forkCount,
  languageColor,
  imageLink
}) => {
  return (
    <div>
      <div style={{width: '80%'}} className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
        <div className="mw9 center ph3-ns">
          <div className="cf ph2-ns">
            <div className="fl w-100 w-25-ns pa2">
              <header className="tc">
                <img
                  src={imageLink}
                  className="br3 ba b--black-10 h3 w3"
                  alt="avatar"
                />
                <h1 className="f5 f4-ns fw6 black-70">{name}</h1>
                <h2 className="f6 black-70 fw2 ttu tracked">{`@${owner}`}</h2>
              </header>
            </div>
            <div className="fl w-100 w-75-ns pa2">
              <div className="tc">
                <h2>Description</h2>
                <p className="tc">
                  <span className="ph3">{description}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <article data-name="slab-stat-small">
          <h3 className="f6 ttu tracked">Statistics</h3>
          <div className="cf">
            <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
              <dd className="f6 fw4 ml0">Star Gazers:</dd>
              <dd className="f3 fw6 ml0">{stagazers}</dd>
            </dl>
            <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
              <dd className="f6 fw4 ml0">Pushed At:</dd>
              <dd className="f3 fw6 ml0">{pushedAt}</dd>
            </dl>
            <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
              <dd className="f6 fw4 ml0">Fork Count</dd>
              <dd className="f3 fw6 ml0">{forkCount}</dd>
            </dl>
            <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
              <dd className="f6 fw4 ml0">Primary Lanuage</dd>
              <dd className="f3 fw6 ml0">
                <span
                  className="repo-language-color ml-0"
                  style={{backgroundColor: `${languageColor}`}}
                />
                {primaryLanguage}
              </dd>
            </dl>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Repo;
