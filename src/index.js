import 'antd/dist/antd.css';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import client from '../src/apollo/';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App/>
    </Router>
  </ApolloProvider>,
 document.getElementById('root'))

registerServiceWorker();
