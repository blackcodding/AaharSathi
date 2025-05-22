import {DEFAULT_COLOR, DEFAULT_SHADOW} from '../../../Theme/Theme';

import {StyleSheet} from 'react-native';

export const generateStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      width: '22%',
      height: 75,
      backgroundColor: DEFAULT_COLOR.WHITE,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: DEFAULT_COLOR.GRAY_LIGHT,
      marginTop: 8,
      marginBottom: 2,
      marginRight: 8,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: DEFAULT_COLOR.GRAY_MEDIUM,
      ...DEFAULT_SHADOW,
    },
  });
};
