import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import StreamContainer from './StreamContainer';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="!GetAway"
        />
        <StreamContainer />
      </div>
    );
  }
}

export default App;
