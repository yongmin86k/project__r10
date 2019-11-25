import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import client from './apollo';
import {ApolloProvider} from '@apollo/react-hooks';
import RootStackNavigator from './navigation/RootStackNavigator';
import FavesProvider from './context/FavesContext';
import LoaderProvider from './context/LoaderContext';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
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
