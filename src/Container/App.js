import React, { Component } from 'react';
import RepoList from '../Components/RepoList';
import Search from '../Components/Search';
import './App.css';
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
    // update searchbox state to the search input value
    const onSearchChange = event => {
      this.setState({ searchBox: event.target.value });
      console.log(event.target.value);
    };

    // destructuring state
    const { repos, searchBox } = this.state;

    const filteredList = repos.filter(repo => {
      return (
        repo.name.toLocaleLowerCase().includes(searchBox.toLocaleLowerCase()) ||
        repo.primaryLanguage
          .toLocaleLowerCase()
          .includes(searchBox.toLocaleLowerCase()) ||
        repo.owner.login
          .toLocaleLowerCase()
          .includes(searchBox.toLocaleLowerCase())
      );
    });

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

        <Search searchChange={onSearchChange} />

          <h1>{`Repositories:`}</h1>

        <RepoList repos={filteredList} />
      </div>
    );
  }
}

export default App;