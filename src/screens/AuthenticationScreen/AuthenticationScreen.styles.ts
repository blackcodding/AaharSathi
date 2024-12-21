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
  });
};
