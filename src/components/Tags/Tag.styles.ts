import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {ITagStyleProps} from './Tag.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: ITagStyleProps) => {
  const {
    isAbsolute,
    color = DEFAULT_COLOR.WHITE,
    backgroundColor = DEFAULT_COLOR.RED_MEDIUM,
    top,
    right,
    bottom,
    left,
  } = props || {};

  return StyleSheet.create({
    mainContainer: {
      position: isAbsolute ? 'absolute' : undefined,
      top: top,
      right: right,
      bottom: bottom,
      left: left,
      backgroundColor: backgroundColor,
      borderRadius: 12,
      justifyContent: 'center',
      alignContent: 'center',
      paddingHorizontal: 6,
      paddingVertical: 2,
    },
    quantityText: {
      fontFamily: 'Roboto-Bold',
      color: color,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_EXTRA_SMALL,
    },
  });
};
