import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {IItemDetailModelStyleProps} from './ItemDetailModel.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IItemDetailModelStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 16,
    },
    textStyle: {
      fontFamily: 'Rubik-Medium',
      color: DEFAULT_COLOR.BLACK,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
    },
  });
};
