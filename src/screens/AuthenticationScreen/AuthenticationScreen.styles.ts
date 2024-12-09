import {IAuthenticationScreenStyleProps} from './AuthenticationScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IAuthenticationScreenStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    imageContainer: {
      flex: 0.4,
      justifyContent: 'center',
    },
    image: {
      alignSelf: 'center',
      width: '60%',
      height: '60%',
    },
  });
};
