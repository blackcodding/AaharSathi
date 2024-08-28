import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {IBottomSheetStyleProps} from './CustomBottomSheet.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IBottomSheetStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    bottomSheetContainer: {
      flex: 1,
      backgroundColor: DEFAULT_COLOR.OFF_WHITE,
    },
    headerContainer: {
      paddingHorizontal: 16,
      paddingVertical: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    heading: {
      fontFamily: 'Roboto-Bold',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      color: DEFAULT_COLOR.BLACK,
    },
    horizontalLine: {
      borderTopWidth: 1.5,
      marginTop: 16,
      borderTopColor: DEFAULT_COLOR.GRAY_LIGHT,
    },
    childrenContainer: {
      paddingHorizontal: 16,
      paddingVertical: 4,
    },
  });
};
