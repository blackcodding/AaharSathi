import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../../Theme/Theme';

import {IGenerateStyleProps} from './DefaultButton.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IGenerateStyleProps) => {
  const {colors, alignSelf} = props;
  const {textColor, borderColor, backgroundColor} = colors || {};
  return StyleSheet.create({
    container: {
      alignSelf: alignSelf || 'center',
      borderWidth: 1.25,
      borderRadius: 50,
      borderColor: borderColor || DEFAULT_COLOR.GRAY_LIGHT,
      backgroundColor: backgroundColor || DEFAULT_COLOR.WHITE,
      elevation: 2,
      shadowColor: DEFAULT_COLOR.GRAY_MEDIUM,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    text: {
      color: textColor || DEFAULT_COLOR.BLACK,
      fontSize: DEFAULT_FONT_SIZE.BUTTON_SIZE,
      fontFamily: 'Roboto-Medium',
      paddingHorizontal: 12,
      paddingVertical: 4,
    },
  });
};
