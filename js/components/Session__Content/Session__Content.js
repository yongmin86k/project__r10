import React from 'react';
import {View, Text} from 'react-native';
import {THEME} from '../../config';
import {Platform} from 'react-native';

const Session__Content = props => {
  return (
    <View
      {...props}
      style={{
        ...THEME.padding.default,
        paddingVertical: 20,
      }}>
      <Text
        style={{
          ...THEME.typography.header,
          fontSize: 16,
          marginVertical: 0,
          marginBottom: 4,
        }}>
        {props.title}
      </Text>
      <Text
        style={{
          ...THEME.typography.header,
          fontSize: 14,
          marginVertical: 0,
          color: THEME.color.greyM,
        }}>
        {props.location}
      </Text>
    </View>
  );
};

export default Session__Content;
