import {StyleSheet, Platform} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: 'black'},
  header: {
    height: 44, // iOS based, TODO:: ANDROID compatible
    paddingHorizontal: THEME.spacing,
    justifyContent: 'center',
  },
  headerTitle: {
    ...THEME.typography.subHeader,
    position: 'absolute',
    alignItems: 'center',
    height: 44, // iOS based, TODO:: ANDROID compatible
    lineHeight: 44, // iOS based, TODO:: ANDROID compatible
    color: THEME.color.white,
    alignSelf: 'center',
  },
  modalView: {
    ...THEME.padding.theme,
    paddingTop: THEME.spacing * 2.5,
    position: 'absolute',
    ...Platform.select({
      ios: {
        bottom: -THEME.spacing,
      },
      android: {
        bottom: 0,
      },
    }),
    left: 0,
    width: '100%',
    height: '100%',
  },
  modalWrap: {
    ...THEME.padding.theme,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: THEME.color.white,
    flex: 1,
  },
  speakerImg: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoName: {
    ...THEME.typography.header,
    alignSelf: 'center',
  },
});

export default styles;
