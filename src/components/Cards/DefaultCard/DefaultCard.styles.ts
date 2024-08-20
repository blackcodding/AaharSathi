import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../../Theme/Theme';

import {StyleSheet} from 'react-native';

export const generateStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      width: '22%',
      height: 75,
      backgroundColor: DEFAULT_COLOR.WHITE,
      borderWidth: 1.5,
      borderRadius: 12,
      borderColor: DEFAULT_COLOR.BLACK,
      marginTop: 8,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 2,
    },
    imageContainer: {
      width: 25,
      height: 25,
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
    itemName: {
      fontFamily: 'Roboto-Medium',
      color: DEFAULT_COLOR.BLACK,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_SMALL,
    },
    quantityContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    quantityText: {
      fontFamily: 'Roboto-Medium',
      color: DEFAULT_COLOR.BLACK,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_EXTRA_SMALL,
      marginLeft: 2,
    },
  });
};
