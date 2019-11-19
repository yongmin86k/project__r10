import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  default: {
    ...THEME.padding.default,
  },
  logo: {
    width: '100%',
    height: 92,
    marginTop: 32,
    marginBottom: 32,
    alignItems: 'center',
    borderColor: THEME.color.greyL,
    borderBottomWidth: 1,
  },
  logoImage: {
    height: 64,
    resizeMode: 'contain',
  },
  accordionHeader: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: THEME.color.purple,
  },
});

export default styles;
