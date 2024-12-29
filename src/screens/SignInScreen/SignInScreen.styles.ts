import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {ISignInScreenStyleProps} from './SignInScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: ISignInScreenStyleProps) => {
  const {height} = props || {};

  return StyleSheet.create({
    mainContainer: {
      height: height,
    },
    loginContainer: {
      flex: 0.65,
      paddingHorizontal: 20,
    },
    labelContainer: {
      alignSelf: 'flex-end',
      marginTop: 16,
      paddingVertical: 4,
      paddingHorizontal: 6,
      borderRadius: 8,
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
