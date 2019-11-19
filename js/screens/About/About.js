import React from 'react';
import {ScrollView, ImageBackground, View, Text} from 'react-native';
import {Typo__Default, Typo__Header} from '../../components';
import {THEME} from '../../config';
import styles from './styles';

const About = () => (
  <ScrollView style={styles.default}>
    <ImageBackground
      source={require('../../assets/images/r10_logo.png')}
      style={styles.logo}
      imageStyle={styles.logoImage}
    />
    <Typo__Default>
      R10 is a conference that focuses on just about any topic related to dev.
    </Typo__Default>
    <Typo__Header>Date & Venue</Typo__Header>
    <Typo__Default>
      The R10 conference will take place on Tuesday, June 27, 2019 in Vancouver,
      BC.
    </Typo__Default>
    <Typo__Header>Code of Conduct</Typo__Header>
  </ScrollView>
);

export default About;
