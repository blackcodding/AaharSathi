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
      maxWidth: '85%',
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderRadius: 12,
      backgroundColor: DEFAULT_COLOR.WHITE,
    },
    headingContainer: {
      marginBottom: 10,
    },
    title: {
      color: DEFAULT_COLOR.BLACK,
      marginRight: 40,
      fontFamily: 'Roboto-Bold',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_LARGE,
    },
    icon: {
      position: 'absolute',
      right: 2,
      borderRadius: 100,
    },
    text: {
      marginTop: 8,
      color: DEFAULT_COLOR.BLACK,
      fontFamily: 'Roboto-Regular',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
    },
    subText: {
      marginTop: 4,
      color: DEFAULT_COLOR.GRAY_MEDIUM,
      fontFamily: 'Roboto-Medium',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
    },
    ratingContainer: {
      flexDirection: 'column',
    },
    starContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 16,
    },
  });
};
