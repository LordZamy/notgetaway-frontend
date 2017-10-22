import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import TextField from './TextFieldForm.js'
import Button from './Button.js'


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
        <TextField/>
        <br/>
        <Button/>
      </div>
    );
  }
}

export default App;
