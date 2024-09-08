import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {ITagStyleProps} from './Tag.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: ITagStyleProps) => {
  const {
    isAbsolute,
    color = DEFAULT_COLOR.WHITE,
    backgroundColor = DEFAULT_COLOR.RED_MEDIUM,
    borderColor,
    top,
    right,
    bottom,
    left,
  } = props || {};

  return StyleSheet.create({
    mainContainer: {
      position: isAbsolute ? 'absolute' : undefined,
      justifyContent: 'center',
      alignContent: 'center',
      top: top,
      right: right,
      bottom: bottom,
      left: left,
      paddingHorizontal: 6,
      paddingVertical: 2,
      backgroundColor: backgroundColor,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: borderColor ? borderColor : backgroundColor,
    },
    quantityText: {
      fontFamily: 'Roboto-Bold',
      color: color,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_EXTRA_SMALL,
    },
  });
};
