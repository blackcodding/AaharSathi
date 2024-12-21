import {StyleSheet} from 'react-native';
import {DEFAULT_COLOR} from '../Theme/Theme';

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
    marginTop: 20,
  },
  inputIcon: {
    marginTop: 6,
    marginRight: 12,
  },
  inputBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 0,
    borderBottomWidth: 2,
    borderBottomColor: DEFAULT_COLOR.GRAY_LIGHT,
  },
});
