import {ISignInScreenStyleProps} from './SignInScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: ISignInScreenStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
    },
  });
};
