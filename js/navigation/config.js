import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';

import {THEME} from '../config';

const GradientHeader = props => (
  <View style={{backgroundColor: THEME.color.white, overflow: 'hidden'}}>
    <LinearGradient
      colors={[THEME.color.red, THEME.color.purple]}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={[StyleSheet.absoluteFill, {height: 120, width: '100%'}]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    color: THEME.color.white,
    fontFamily: THEME.typography.fontMain,
  },
  headerTintColor: THEME.color.white,
});
