import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../../Theme/Theme';

import {StyleSheet} from 'react-native';

export const generateStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      width: 250,
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: 8,
      marginRight: 8,
      padding: 10,
      borderWidth: 1.5,
      borderRadius: 12,
      borderColor: DEFAULT_COLOR.BLACK,
      backgroundColor: DEFAULT_COLOR.WHITE,
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
      fontFamily: 'Rubik-Bold',
      color: DEFAULT_COLOR.BLACK,
      marginRight: 8,
    },
    threeDotsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    bullet: {
      width: 6,
      height: 6,
      borderRadius: 50,
      backgroundColor: DEFAULT_COLOR.BLACK,
      marginRight: 2,
    },
    subheading: {
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_SMALL,
      fontFamily: 'Rubik-Bold',
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
      alignSelf: 'flex-end',
      borderWidth: 1.5,
      borderRadius: 50,
      borderColor: DEFAULT_COLOR.BLACK,
      opacity: 0.1,
    },
    commonImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
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
    calenderContainer: {
      height: 15,
      width: 15,
      opacity: 0.6,
    },
    date: {
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_SMALL,
      fontFamily: 'Rubik-Medium',
      color: DEFAULT_COLOR.BLACK,
      marginLeft: 6,
    },
    amountContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    amount: {
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_SMALL,
      fontFamily: 'Rubik-Medium',
      color: DEFAULT_COLOR.BLACK,
    },
    addItemContainer: {
      height: 20,
      width: 20,
      borderRadius: 50,
      marginLeft: 6,
      opacity: 0.6,
    },
  });
};
