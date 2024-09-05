import {IHeaderStyleProps} from './Header.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IHeaderStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    profileContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
  });
};
