
import {IForgotPasswordScreenStyleProps} from './ForgotPasswordScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IForgotPasswordScreenStyleProps) => {
  const {} = props || {};
  
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
  });
};
