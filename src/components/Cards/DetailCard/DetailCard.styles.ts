import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {StyleSheet} from 'react-native';

export const generateStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      width: 80,
      height: 80,
      backgroundColor: DEFAULT_COLOR.BLUE_LIGHT,
      borderWidth: 2,
      borderRadius: 12,
      borderColor: DEFAULT_COLOR.BLUE_DARK,
      marginTop: 8,
      marginRight: 8,
    },
  });
};
