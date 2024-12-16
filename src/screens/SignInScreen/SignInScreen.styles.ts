import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {ISignInScreenStyleProps} from './SignInScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: ISignInScreenStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: DEFAULT_COLOR.OFF_WHITE,
    },
    secondaryContainer: {
      flexDirection: 'column',
      padding: 20,
      marginTop: 60,
    },
    inputContainer: {
      flexDirection: 'column',
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
      position: 'absolute',
      bottom: 20,
      flexDirection: 'row',
      alignSelf: 'center',
    },
  });
};
