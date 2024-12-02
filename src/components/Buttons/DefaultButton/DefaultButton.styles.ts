import {DEFAULT_SHADOW} from './../../../Theme/Theme';
import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../../Theme/Theme';

import {IGenerateStyleProps} from './DefaultButton.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IGenerateStyleProps) => {
  const {colors, alignSelf} = props;
  const {textColor, borderColor, backgroundColor} = colors || {};
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      alignSelf: alignSelf || 'center',
      borderWidth: 1.25,
      borderRadius: 50,
      borderColor: borderColor || DEFAULT_COLOR.GRAY_LIGHT,
      backgroundColor: backgroundColor || DEFAULT_COLOR.WHITE,
      shadowColor: DEFAULT_COLOR.GRAY_MEDIUM,
      ...DEFAULT_SHADOW,
    },
    text: {
      color: textColor || DEFAULT_COLOR.BLACK,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
      fontFamily: 'Roboto-Medium',
      paddingHorizontal: 12,
      paddingVertical: 4,
    },
  });
};
