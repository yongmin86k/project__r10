import React from 'react';
import {Text} from 'react-native';
import {THEME} from '../../config';

export default Typo__Default = props => (
  <Text {...props} style={{...THEME.typography.default}}>
    {props.children}
  </Text>
);
