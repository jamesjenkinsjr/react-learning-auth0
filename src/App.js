import React, { Component } from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <Route path='/' exact component={Home} />
        <Route path='/profile/:id' exact component={Profile} />
        <h1>Respect my authoritah</h1>
      </div>
    );
  }
}

export default App;
