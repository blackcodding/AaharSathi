import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {StyleSheet} from 'react-native';

export const generateStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      width: '22%',
      height: 72,
      backgroundColor: DEFAULT_COLOR.WHITE,
      borderWidth: 2,
      borderRadius: 12,
      borderColor: DEFAULT_COLOR.BLACK,
      borderStyle: 'dashed',
      marginTop: 8,
      marginRight: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
