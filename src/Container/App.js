import React, { Component } from 'react';
import './App.css';
import RepoList from '../Components/RepoList';
import Search from '../Components/Search';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initial state for the list of repositoies and the search box.
      repos: [],
      searchBox: ''
    };
  }

  // get all the data required to populate frontend.
  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/gadjacobs/front-end-challenge/master/data.json'
    )
      .then(response => response.json())
      .then(data => {
        // populate the empty repository array with data from data.json
        this.setState({ repos: data.data.repositories });
        console.log(data.data.repositories);
      });
  }

  render() {
    const { repos, searchBox } = this.state;

    return repos.length === 0 ? (
      <article className="vh-100 dt w-100 bg-dark-pink">
        <div className="dtc v-mid tc white ph3 ph4-l">
          <h2 className="f6 f2-m f-subheadline-l fw6 tc">LOADING!!!</h2>
        </div>
      </article>
    ) : (
      <div className="tc">
        <h1>Github Repo Finder</h1>
        <h4 className="white-90">
          Enter a username and I'll show you their repos.
        </h4>

        <Search />

        <h1>Repos:</h1>

        <RepoList />
      </div>
    );
  }
}

export default App;
