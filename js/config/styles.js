import {Platform} from 'react-native';

const themes = {
  color: {
    greyM: '#999',
    greyL: '#e6e6e6',
    blue: '#8797D6',
    purple: '#9963ea',
    red: '#cf392a',
    white: '#fff',
    black: '#000',
  },
  spacing: 16,
  padding: {
    theme: {
      padding: 16,
    },
    default: {
      paddingHorizontal: 16,
    },
  },
  typography: {
    default: {
      fontFamily: 'Montserrat-Light',
      fontSize: 18,
      marginVertical: 12,
      lineHeight: 30,
    },
    header: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 32,
      marginVertical: 12,
    },
    subHeader: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      color: '#999',
    },
    ...Platform.select({
      ios: {
        fontMain: 'Montserrat',
      },
      android: {
        fontMain: 'Montserrat-Regular',
      },
    }),
  },
};

export default themes;
