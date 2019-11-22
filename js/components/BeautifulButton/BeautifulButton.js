import React from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {THEME} from '../../config';

const BeautifulButton = props => (
  <LinearGradient
    {...props}
    colors={[THEME.color.purple, THEME.color.blue]}
    start={{x: 0.0, y: 1.0}}
    end={{x: 1.0, y: 0.0}}
    style={{
      alignSelf: 'center',
      marginTop: THEME.spacing * 2,
      borderRadius: 50,
    }}>
    <Text
      accessibilityRole="button"
      style={{
        ...THEME.typography.subHeader,
        color: THEME.color.white,
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: THEME.spacing * 2,
      }}>
      {props.children}
    </Text>
  </LinearGradient>
);

export default BeautifulButton;
