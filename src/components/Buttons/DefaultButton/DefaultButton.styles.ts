import {DEFAULT_SHADOW} from './../../../Theme/Theme';
import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../../Theme/Theme';

import {IGenerateStyleProps} from './DefaultButton.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IGenerateStyleProps) => {
  const {variant = 'secondary', colors, alignSelf} = props;
  const {textColor, borderColor, backgroundColor} = colors || {};
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      alignSelf: alignSelf || 'center',
      borderWidth: 1.25,
      borderRadius: variant === 'secondary' ? 50 : 12,
      borderColor: borderColor || DEFAULT_COLOR.GRAY_LIGHT,
      backgroundColor: backgroundColor || DEFAULT_COLOR.WHITE,
      shadowColor: DEFAULT_COLOR.GRAY_LIGHT,
      ...DEFAULT_SHADOW,
    },
    text: {
      color: textColor || DEFAULT_COLOR.BLACK,
      fontSize:
        variant === 'secondary'
          ? DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR
          : DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      fontFamily: 'Roboto-Medium',
      paddingHorizontal: 12,
      paddingVertical: variant === 'secondary' ? 4 : 12,
    },
  });
};
