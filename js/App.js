import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {About} from './screens';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <About />
      </SafeAreaView>
    );
  }
}
