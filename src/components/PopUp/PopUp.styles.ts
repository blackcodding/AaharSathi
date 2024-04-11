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
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderRadius: 10,
      backgroundColor: DEFAULT_COLOR.WHITE,
    },
    headingContainer: {
      marginBottom: 10,
    },
    text: {
      color: DEFAULT_COLOR.BLACK,
      marginRight: 40,
      fontFamily: 'Rubik-Medium',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
    },
    icon: {
      position: 'absolute',
      right: 2,
    },
    subText: {
      color: DEFAULT_COLOR.GRAY_DARK,
      fontFamily: 'Rubik-Regular',
    },
  });
};
