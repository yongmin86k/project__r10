import React, {Component} from 'react';
import client from './apollo';
import {ApolloProvider} from '@apollo/react-hooks';
import RootStackNavigator from './navigation/RootStackNavigator';
import FavesProvider from './context/FavesContext';
import LoaderProvider from './context/LoaderContext';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <LoaderProvider>
          <FavesProvider>
            <RootStackNavigator />
          </FavesProvider>
        </LoaderProvider>
      </ApolloProvider>
    );
  }
}
