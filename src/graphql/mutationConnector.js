import React, { Component } from 'react';
import { Mutation } from "react-apollo";
const mutationConnector = (mutation) => WrappedComponent => {
  class MutationConnector extends Component {
    render = () => {
      return (
        <Mutation mutation={mutation}>
          {(mutation, { loading, error, data }) => {
            return (
              <WrappedComponent
                mutation={mutation} loading={loading} error={error} data={data}
                {...this.props}
              />
            )
          }}
        </Mutation>
      )
    }
  }
  return MutationConnector
}
export default mutationConnector