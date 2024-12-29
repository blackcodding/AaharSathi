import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {ISignUpScreenStyleProps} from './SignUpScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: ISignUpScreenStyleProps) => {
  const {height, width} = props || {};

  return StyleSheet.create({
    mainContainer: {
      height: height,
    },
    signUpContainer: {
      flex: 0.65,
      paddingHorizontal: 20,
    },
    label: {
      fontFamily: 'Roboto-Medium',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
      fontWeight: 'bold',
      color: DEFAULT_COLOR.BLUE_DARK,
    },
    authContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 20,
    },
  });
};
