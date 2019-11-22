import React, {Component} from 'react';
import client from './apollo';
import {ApolloProvider} from '@apollo/react-hooks';
import RootStackNavigator from './navigation/RootStackNavigator';
import FavesProvider from './context/FavesContext';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <RootStackNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}
