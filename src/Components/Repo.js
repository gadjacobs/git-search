import React from 'react';
import 'tachyons';

const Repo = ({
  name,
  stagazers,
  description,
  owner,
  pushedAt,
  primaryLanguage,
  forkCount
}) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <h2>{`@${owner}`}</h2>
      <p className="tc">
        <span className="ph3"></span>{' '}
      </p>

      <article className="pa3 pa5-ns" data-name="slab-stat-small">
        <h3 className="f6 ttu tracked">Statistics</h3>
        <div className="cf">
          <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd className="f6 fw4 ml0">Star Gazers</dd>
            <dd className="f3 fw6 ml0">1,024</dd>
          </dl>
          <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd className="f6 fw4 ml0">Open Issues</dd>
            <dd className="f3 fw6 ml0">993</dd>
          </dl>
          <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd className="f6 fw4 ml0">Next Release</dd>
            <dd className="f3 fw6 ml0">10-22</dd>
          </dl>
          <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd className="f6 fw4 ml0">Days Left</dd>
            <dd className="f3 fw6 ml0">4</dd>
          </dl>
          <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd className="f6 fw4 ml0">Favorite Cat</dd>
            <dd className="f3 fw6 ml0">All of Them</dd>
          </dl>
          <dl className="fl fn-l w-50 dib-l w-auto-l lh-title">
            <dd className="f6 fw4 ml0">App Downloads</dd>
            <dd className="f3 fw6 ml0">1,200</dd>
          </dl>
        </div>
      </article>
    </div>
  );
};

export default Repo;
