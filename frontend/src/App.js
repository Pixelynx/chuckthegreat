import React, { Component } from 'react';
import { UnderConstruction } from './frontpage/under_construction.jsx';
import { Links } from './frontpage/links.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <UnderConstruction />
        <Links />
        Hello
      </div>
    );
  }
}

export default App;
