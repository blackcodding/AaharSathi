import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {IAuthenticationScreenStyleProps} from './AuthenticationScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IAuthenticationScreenStyleProps) => {
  const {height, width} = props || {};

  return StyleSheet.create({
    mainContainer: {
      height: height,
    },
    verifyOTPContainer: {
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
    OTPInputBoxContainer: {
      width: '70%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    OTPInputBox: {
      flex: 0.22,
      textAlign: 'center',
      borderWidth: 1.25,
      backgroundColor: DEFAULT_COLOR.WHITE,
      borderColor: DEFAULT_COLOR.GRAY_LIGHT,
      borderRadius: 12,
      fontFamily: 'Roboto-Medium',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      fontWeight: 'bold',
      color: DEFAULT_COLOR.BLACK,
    },
  });
};
