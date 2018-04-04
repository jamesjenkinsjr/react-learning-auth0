import React, { Component } from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import Callback from './components/Callback';
import PrivateRoute from './components/PrivateRoute';
import { Route, Link } from 'react-router-dom';
import Auth from './services/auth';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.auth = new Auth();
    this.state = {
      profile: {}
    }
  }
  componentWillMount(){
    const { getProfile, userProfile } = this.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({
          profile: profile
        })
      })
    } else {
      this.setState({
        profile: userProfile
      });
    }
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
          <li style={{display: 'inline-block'}}><Link to="/">Home</Link></li>
          <li style={{display: this.auth.isAuthenticated() ? 'inline-block' : 'none'}}><Link to="/profile/">Profile</Link></li>
          <li style={{display: this.auth.isAuthenticated() ? 'none' : 'inline-block'}}><button onClick={() => this.auth.login()}>Login</button></li>
          <li style={{display: this.auth.isAuthenticated() ? 'inline-block' : 'none'}}><button onClick={() => this.auth.logout()}>Logout</button></li>

        </ul>
        <Route path='/' exact component={Home} />
        <Route path='/callback' exact render={(props) => {
          this.handleAuthentication(props);
          return <Callback {...props} />
        }} />
        <PrivateRoute path='/profile/' exact component={Profile} auth={this.auth} {...this.state}/>
      </div>
    );
  }
}

export default App;
