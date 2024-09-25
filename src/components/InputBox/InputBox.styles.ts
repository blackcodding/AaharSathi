import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {IInputBoxStyleProps} from './InputBox.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IInputBoxStyleProps) => {
  const {isError, editable, showSearchIcon} = props || {};

  return StyleSheet.create({
    inputContainer: {
      flex: 0.96,
      marginHorizontal: 4,
      justifyContent: 'center',
      alignSelf: 'center',
    },
    searchIcon: {
      position: 'absolute',
      left: 8,
      zIndex: 1,
    },
    input: {
      height: 34,
      paddingHorizontal: 12,
      paddingLeft: showSearchIcon ? 36 : 12,
      paddingRight: 36,
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
    crossIcon: {
      width: 28,
      height: 28,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: 8,
      zIndex: 1,
      borderRadius: 100,
    },
  });
};
