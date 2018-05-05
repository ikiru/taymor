import login from '@org/login';
import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './sass/app.scss';


class App extends Component {
  render() {
    return (
      <div className="App">

      <Route path='/login' component={login}/>



      </div>
    );
  }
}

export default App;
