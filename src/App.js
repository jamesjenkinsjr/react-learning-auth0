import React, { Component } from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Home />
        <Profile />
        <h1>Respect my authoritah</h1>
      </div>
    );
  }
}

export default App;
