import {ISignUpScreenStyleProps} from './SignUpScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: ISignUpScreenStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {},
    signUpContainer: {},
  });
};
