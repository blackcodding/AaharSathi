import {DEFAULT_COLOR} from '../../Theme/Theme';
import {ISplashScreenStyleProps} from './SplashScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: ISplashScreenStyleProps) => {
  const {height} = props || {};

  return StyleSheet.create({
    mainContainer: {
      height: height,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: DEFAULT_COLOR.WHITE,
    },
  });
};
