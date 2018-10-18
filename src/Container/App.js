import React, { Component } from 'react';
import './App.css';
import User from '../Components/User';
import Search from '../Components/Search';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="tc">
        <h1>Github Repo Finder</h1>
        <h4 className="white-90">
          Enter a username and I'll show you their repos.
        </h4>

        <Search />

        <h1>Repos:</h1>

        <User />
        <User />
        <User />
      </div>
    );
  }
}

export default App;
