import React, { Component } from 'react';
import { UnderConstruction } from './frontpage/under_construction.jsx';
import { Links } from './frontpage/links.jsx';
import Player from './player/player.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Links />
        <Player />
      </div>
    );
  }
}

export default App;
