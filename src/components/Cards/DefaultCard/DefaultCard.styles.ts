import {
  DEFAULT_COLOR,
  DEFAULT_FONT_SIZE,
  DEFAULT_SHADOW,
} from '../../../Theme/Theme';

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
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: DEFAULT_COLOR.GRAY_MEDIUM,
      ...DEFAULT_SHADOW,
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
