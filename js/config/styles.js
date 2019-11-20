import {Platform} from 'react-native';

const themes = {
  color: {
    greyM: '#999',
    greyL: '#e6e6e6',
    blue: '#8797D6',
    purple: '#9963ea',
    red: '#cf392a',
    white: '#fff',
  },
  padding: {
    default: {
      paddingRight: 16,
      paddingLeft: 16,
    },
  },
  typography: {
    default: {
      fontFamily: 'Montserrat-Light',
      fontSize: 18,
      marginVertical: 12,
    },
    header: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 32,
      marginVertical: 12,
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
