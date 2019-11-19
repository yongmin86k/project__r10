import React from 'react';
import {ScrollView, ImageBackground, View, Text} from 'react-native';
import {Typo__Header} from '../../components';

import styles from './styles';

const About = () => (
  <ScrollView style={styles.default}>
    <ImageBackground
      source={require('../../assets/images/r10_logo.png')}
      style={styles.logo}
      imageStyle={styles.logoImage}
    />
    <Typo__Header>Hello About</Typo__Header>
  </ScrollView>
);

export default About;
