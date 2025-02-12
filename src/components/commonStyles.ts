import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../Theme/Theme';

import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  gifContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
    borderRadius: 100,
  },
  gif: {
    width: '90%',
    height: '90%',
    objectFit: 'contain',
  },
  keyboardAvoidingView: {
    flex: 1,
    paddingBottom: 8,
  },
  lottieContainer: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
  lottieImage: {
    width: '70%',
    height: '70%',
  },
  inputBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  inputIcon: {
    marginTop: 6,
    marginRight: 12,
  },
  inputWrapper: {
    flex: 1,
  },
  inputBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 0,
    borderBottomWidth: 2,
    borderBottomColor: DEFAULT_COLOR.GRAY_LIGHT,
  },
  error: {
    fontFamily: 'Roboto-Regular',
    fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_SMALL,
    color: DEFAULT_COLOR.RED_DARK,
    marginLeft: 40,
    marginTop: 4,
  },
  loaderContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DEFAULT_COLOR.TRANSLUCENT_COLOR,
    zIndex: 1,
  },
});
