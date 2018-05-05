import {ApolloClient} from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { onError } from "apollo-link-error";

import tokenClient from './tokenClient';
export { tokenClient };


const httpLink = process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === undefined ? new HttpLink({
  uri: 'http://localhost:9005/graphql'
}) : new HttpLink({
  uri: 'http://localhost:9005/graphql'
  //uri: 'http://admin.rhinofleettracking.com/graphql/'
})

const authLink = new ApolloLink((operation, forward) => {
  let token;
  let authCode;

  if (localStorage.getItem('token')) {
    token = localStorage.getItem('token')
    authCode = localStorage.getItem('authCode')
  }
  else {
    token = sessionStorage.getItem('token')
    authCode = sessionStorage.getItem('authCode')
  }

  operation.setContext(({ headers }) => ({ headers: {
    ...headers,
    token: token,
    authCode: authCode
  }}));

  return forward(operation);
});

const tokenLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((data) => {
    if (localStorage.getItem('token')) {
      localStorage.setItem('token', data.extensions.token);
    }
    else {
      sessionStorage.setItem('token', data.extensions.token);
    }

    return data;
  })
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);

    if (networkError.result === 600) {
      localStorage.removeItem('token')
      sessionStorage.removeItem('token')
    }
  }
});

export default new ApolloClient({
  link: ApolloLink.from([tokenLink, errorLink, authLink, httpLink ]), // the order of the links matter
  cache: new InMemoryCache({
    addTypename: false
  })
});
