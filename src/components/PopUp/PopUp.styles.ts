import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {StyleSheet} from 'react-native';

export const generateStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: DEFAULT_COLOR.TRANSLUCENT_COLOR,
    },
    popUpContainer: {
      maxHeight: '60%',
      maxWidth: '80%',
      backgroundColor: 'white',
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    text: {
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      marginBottom: 10,
    },
    subText: {},
  });
};
