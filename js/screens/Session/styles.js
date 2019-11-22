import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  view: {
    ...THEME.padding.theme,
  },
  wrapHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  subHeader: {
    ...THEME.typography.subHeader,
  },
  iconHeart: {width: 32},
  time: {
    ...THEME.typography.subHeader,
    color: THEME.color.red,
  },
  presentedBy: {
    ...THEME.typography.subHeader,
    marginTop: THEME.spacing,
  },
  speakerView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: THEME.spacing,
  },
  speakerImg: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 40,
  },
  speakerName: {
    ...THEME.typography.subHeader,
    color: THEME.color.black,
  },
});

export default styles;
