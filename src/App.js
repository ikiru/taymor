import login from '@org/login.js';
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import dashboard from './pages/dashboard';
import './sass/app.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path='/login' component={login}/>
      <Route path='/' component={dashboard}/>
      </div>
    );
  }
}

export default App;
