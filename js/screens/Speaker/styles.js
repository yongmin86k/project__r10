import {StyleSheet, Platform} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: 'black'},
  header: {
    ...Platform.select({
      ios: {
        height: 44,
        justifyContent: 'center',
      },
      android: {
        height: 56,
        flexDirection: 'row-reverse',
        alignItems: 'center',
      },
    }),
    position: 'relative',
    paddingHorizontal: THEME.spacing,
  },
  headerTitle: {
    ...THEME.typography.subHeader,
    ...Platform.select({
      ios: {
        position: 'absolute',
        alignItems: 'center',
        height: 44,
        lineHeight: 44,
      },
      android: {
        flex: 1,
        height: 56,
        lineHeight: 56,
      },
    }),
    color: THEME.color.white,
    alignSelf: 'center',
  },
  iconWrap: {
    ...Platform.select({
      android: {
        marginRight: 36,
      },
    }),
  },
  modalView: {
    ...THEME.padding.theme,
    ...Platform.select({
      ios: {
        paddingTop: THEME.spacing * 2.5,
        position: 'absolute',
        bottom: -THEME.spacing,
        width: '100%',
        height: '100%',
        left: 0,
      },
      android: {
        flex: 1,
        paddingTop: THEME.spacing / 2,
        paddingBottom: 0,
      },
    }),
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
