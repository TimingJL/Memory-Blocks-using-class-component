import React, { Component } from 'react';
import MemoryBlocks from 'containers/MemoryBlocks';
import GithubCorner from 'react-github-corner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MemoryBlocks />
        <GithubCorner
          size={60}
          octoColor={'black'}
          bannerColor={'white'}
          href="https://github.com/TimingJL/Memory-Blocks"
        />
      </div>
    );
  }
}

export default App;
