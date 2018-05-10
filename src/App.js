import login from '@org/login.js';
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import dashboard from './pages/dashboard';
import business from './pages/business';
import renters from './pages/renters';
import settings from './pages/settings';

import './sass/app.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path='/login' component={login}/>
      <Route path='/' component={dashboard}/>
      <Route path='/business' component={business}/>
      <Route path='/renters' component={renters}/>
      <Route path='/settings' component={settings}/>
      </div>
    );
  }
}

export default App;
