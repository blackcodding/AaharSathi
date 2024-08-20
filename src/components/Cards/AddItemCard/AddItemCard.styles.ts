import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {StyleSheet} from 'react-native';

export const generateStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      width: '22%',
      backgroundColor: DEFAULT_COLOR.WHITE,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: DEFAULT_COLOR.GRAY_LIGHT,
      marginTop: 8,
      marginBottom: 2,
      marginRight: 8,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 2,
      shadowColor: DEFAULT_COLOR.GRAY_MEDIUM,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
  });
};
