import React, { Component } from 'react';
import { ApolloConsumer  } from "react-apollo";
const consummerConnector = () => WrappedComponent => {
  class ConsummerConnector extends Component {
    render = () => {
      return (
        <ApolloConsumer>
        {client => (
            <WrappedComponent
            apolloClient={client}
            {...this.props}
            />          
        )}
        </ApolloConsumer>
      )
    }
  }
  return ConsummerConnector
}
export default consummerConnector