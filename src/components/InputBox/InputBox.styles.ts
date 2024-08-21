import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {IInputBoxStyleProps} from './InputBox.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IInputBoxStyleProps) => {
  const {isError, editable} = props || {};

  return StyleSheet.create({
    inputContainer: {
      flex: 1,
      marginHorizontal: 4,
      alignSelf: 'center',
    },
    input: {
      height: 34,
      paddingHorizontal: 12,
      paddingVertical: 0,
      textAlignVertical: 'center',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
      fontFamily: 'Roboto-Regular',
      borderWidth: 1.25,
      borderColor: !isError
        ? DEFAULT_COLOR.GRAY_LIGHT
        : DEFAULT_COLOR.RED_MEDIUM,
      borderRadius: 8,
      backgroundColor: editable
        ? DEFAULT_COLOR.WHITE
        : DEFAULT_COLOR.GRAY_LIGHT,
    },
  });
};
