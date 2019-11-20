import React from 'react';
import {View, Text} from 'react-native';
import {THEME} from '../../config';

const Session__Header = props => (
  <View
    {...props}
    style={{
      ...THEME.padding.default,
      backgroundColor: THEME.color.greyL,
    }}>
    <Text
      style={{
        ...THEME.typography.header,
        fontSize: 14,
        marginVertical: 8,
      }}>
      {props.children}
    </Text>
  </View>
);

export default Session__Header;
