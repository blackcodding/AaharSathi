
import {IAuthenticationScreenStyleProps} from './AuthenticationScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IAuthenticationScreenStyleProps) => {
  const {} = props || {};
  
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
  });
};
