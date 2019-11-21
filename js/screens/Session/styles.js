import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  view: {
    ...THEME.padding.theme,
  },
  subHeader: {
    ...THEME.typography.subHeader,
  },
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
  buttonBG: {
    alignSelf: 'center',
    marginTop: THEME.spacing * 2,
    borderRadius: 50,
  },
  button: {
    ...THEME.typography.subHeader,
    color: THEME.color.white,
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: THEME.spacing * 2,
  },
});

export default styles;
