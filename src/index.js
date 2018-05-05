import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import client from "./apollo";
import registerServiceWorker from './registerServiceWorker';
import './sass/ant.less';

ReactDOM.render(
  <ApolloProvider client={client}>
  <Router>
    <App/>,
  </Router>
</ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
