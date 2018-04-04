import React, { Component } from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import Callback from './components/Callback';
import { Route, Link } from 'react-router-dom';
import Auth from './services/auth';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.auth = new Auth();
  }
  
  handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.auth.handleAuthentication();
    }
  }
  render() {
    return (
      <div >
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile/123">Profile</Link></li>
          <li><button onClick={() => this.auth.login()}>Login</button></li>
        </ul>
        <Route path='/' exact component={Home} />
        <Route path='/profile/:id' exact component={Profile} />
        <Route path='/callback' exact render={(props) => {
          this.handleAuthentication(props);
          return <Callback {...props} />
        }} />
      </div>
    );
  }
}

export default App;
