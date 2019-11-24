import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  header: {flexDirection: 'row', alignItems: 'flex-start'},
  accordionHeader: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: THEME.color.purple,
    marginBottom: THEME.spacing,
  },
  description: {
    flexDirection: 'row',
  },
  gap: {
    width: 28,
  },
  text: {
    ...THEME.typography.default,
    marginTop: 0,
    marginBottom: THEME.spacing * 2,
    paddingRight: THEME.spacing * 2,
  },
});

export default styles;
