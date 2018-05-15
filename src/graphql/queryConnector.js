/*
  BetterOff Prodictions
  Notes -

  created - Jeff Winkler  05/15/2018

***********************************************************************
  modified -

*/
import React, { Component } from 'react';
import { Query } from "react-apollo";
const queryConnector = (queryGQL, variables) => WrappedComponent => {
  class QueryConnector extends Component {
    render = () => {
      return (
        <Query query={queryGQL}  variables={ variables }>
          {({ loading, error, data }) => {
            console.log('Helper', queryGQL)
            console.log('loading',loading)
            console.log('loading',data)
            return (
              <WrappedComponent
                runQuery={queryGQL} loading={loading} error={error} data={data}
                {...this.props}
              />
            )
          }}
        </Query>
      )
    }
  }
  return QueryConnector
}
export default queryConnector
