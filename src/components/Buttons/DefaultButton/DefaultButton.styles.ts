import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../../Theme/Theme';

import {IGenerateStyleProps} from './DefaultButton.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IGenerateStyleProps) => {
  const {colors, alignSelf} = props;
  const {textColor, borderColor, backgroundColor} = colors || {};
  return StyleSheet.create({
    container: {
      alignSelf: alignSelf || 'center',
      borderWidth: 1.5,
      borderRadius: 50,
      borderColor: borderColor || DEFAULT_COLOR.BLACK,
      backgroundColor: backgroundColor || DEFAULT_COLOR.WHITE,
      elevation: 2,
      shadowColor: DEFAULT_COLOR.BLACK,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    text: {
      color: textColor || DEFAULT_COLOR.BLACK,
      fontSize: DEFAULT_FONT_SIZE.BUTTON_SIZE,
      fontFamily: 'Rubik-Regular',
      paddingHorizontal: 12,
      paddingVertical: 4,
    },
  });
};
