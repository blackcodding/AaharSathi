import {DEFAULT_COLOR, DEFAULT_SHADOW} from '../../Theme/Theme';

import {IChipStyleProps} from './Chip.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IChipStyleProps) => {
  const {chipName, selectedChip, actionType} = props || {};

  return StyleSheet.create({
    mainContainer: {
      alignItems: 'center',
      alignSelf: 'flex-start',
      borderRadius: 50,
      borderWidth: 1,
      borderColor:
        chipName === selectedChip
          ? actionType === 'delete'
            ? DEFAULT_COLOR.GRAY_MEDIUM
            : DEFAULT_COLOR.BLACK
          : DEFAULT_COLOR.GRAY_LIGHT,
      backgroundColor:
        chipName === selectedChip
          ? actionType === 'delete'
            ? DEFAULT_COLOR.GRAY_LIGHT
            : DEFAULT_COLOR.OFF_WHITE
          : actionType === 'delete'
          ? DEFAULT_COLOR.OFF_WHITE
          : DEFAULT_COLOR.WHITE,
      shadowColor: DEFAULT_COLOR.GRAY_MEDIUM,
      marginRight: 4,
    },
    textDecoration: {
      color: DEFAULT_COLOR.BLACK,
      paddingHorizontal: 12,
      paddingVertical: 4,
    },
  });
};
