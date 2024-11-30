import {
  DEFAULT_COLOR,
  DEFAULT_FONT_SIZE,
  DEFAULT_SHADOW,
} from '../../../Theme/Theme';

import {StyleSheet} from 'react-native';

export const generateStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      width: 250,
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: 8,
      marginBottom: 2,
      marginRight: 8,
      padding: 10,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: DEFAULT_COLOR.GRAY_LIGHT,
      backgroundColor: DEFAULT_COLOR.WHITE,
      shadowColor: DEFAULT_COLOR.GRAY_MEDIUM,
      ...DEFAULT_SHADOW,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    headingContainer: {
      flexDirection: 'row',
    },
    heading: {
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      fontFamily: 'Roboto-Medium',
      color: DEFAULT_COLOR.BLACK,
      marginRight: 8,
    },
    threeDotsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 4,
      marginRight: 4,
    },
    bullet: {
      width: 4,
      height: 4,
      borderRadius: 50,
      backgroundColor: DEFAULT_COLOR.GRAY_MEDIUM,
      marginRight: 2,
    },
    subheading: {
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_SMALL,
      fontFamily: 'Roboto-Regular',
      color: DEFAULT_COLOR.BLACK,
      marginTop: 2,
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 2,
    },
    imageContainer: {
      height: 30,
      width: 30,
      borderRadius: 50,
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 50,
    },
    arrowContainer: {
      height: 30,
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      borderWidth: 1,
      borderColor: DEFAULT_COLOR.GRAY_LIGHT,
      backgroundColor: DEFAULT_COLOR.OFF_WHITE,
    },
    detailContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 18,
    },
    dateContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    date: {
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_SMALL,
      fontFamily: 'Roboto-Regular',
      color: DEFAULT_COLOR.BLACK,
      marginLeft: 2,
    },
    amountContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    amount: {
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_SMALL,
      fontFamily: 'Roboto-Regular',
      color: DEFAULT_COLOR.BLACK,
    },
    addItemContainer: {
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 4,
      borderRadius: 100,
    },
  });
};
