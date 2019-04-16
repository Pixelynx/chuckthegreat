import React, { Component } from 'react';
import Navigation from './frontpage/index/navigation.jsx';
import { UnderConstruction } from './frontpage/under_construction.jsx';
import { Links } from './frontpage/links.jsx';
import Player from './player/player.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Links />
        <Player />
      </div>
    );
  }
}

export default App;
