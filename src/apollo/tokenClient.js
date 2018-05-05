import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === undefined ? new HttpLink({
  uri: 'http://admin.rhinofleettracking.com/auth-dev/graphql/'
}) : new HttpLink({
  uri: 'http://admin.rhinofleettracking.com/auth-dev/graphql/'
  //uri: 'http://admin.rhinofleettracking.com/auth/graphql/'
})

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
