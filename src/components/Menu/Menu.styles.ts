import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {StyleSheet} from 'react-native';

export const generateStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: DEFAULT_COLOR.TRANSLUCENT_COLOR,
    },
    menuContainer: {
      height: '100%',
      maxWidth: '80%',
      //   paddingVertical: 20,
      //   paddingHorizontal: 20,
      backgroundColor: DEFAULT_COLOR.WHITE,
    },
    headingContainer: {
      flexDirection: 'column',
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: DEFAULT_COLOR.VIOLET_MEDIUM,
    },
    personalDetailsContainer: {
      marginTop: 10,
    },
    name: {
      color: DEFAULT_COLOR.BLACK,
      fontFamily: 'Rubik-Bold',
      fontSize: 14,
    },
    phoneNumber: {
      color: DEFAULT_COLOR.BLACK,
      fontFamily: 'Rubik-Medium',
      fontSize: 14,
    },
    bodyContainer: {},
  });
};
