import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {IItemDetailModelStyleProps} from './ItemDetailModel.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IItemDetailModelStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 16,
    },
    textStyle: {
      marginBottom: 12,
      fontFamily: 'Roboto-Regular',
      color: DEFAULT_COLOR.BLACK,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
    },
    iconContainer: {
      height: 28,
      width: 28,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
      borderRadius: 100,
      backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
    },
    quantityContainer: {
      flex: 0.75,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 36,
    },
    categoryContainer: {
      flexDirection: 'column',
    },
    unitBox: {
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderWidth: 1,
      borderColor: DEFAULT_COLOR.GRAY_LIGHT,
      borderRadius: 6,
      marginTop: 6,
    },

    unitText: {
      color: DEFAULT_COLOR.BLACK,
      fontSize: 16,
    },
  });
};
