import React, {Component} from 'react';
import client from './apollo';
import {ApolloProvider} from '@apollo/react-hooks';
import RootStackNavigator from './navigation/RootStackNavigator';
import SafeAreaView from 'react-native-safe-area-view';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
        <SafeAreaView
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        />
      </ApolloProvider>
    );
  }
}
