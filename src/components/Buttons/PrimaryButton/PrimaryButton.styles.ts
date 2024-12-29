import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../../Theme/Theme';

import {IPrimaryButtonStyleProps} from './PrimaryButton.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IPrimaryButtonStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 12,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
      backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
    },
    buttonText: {
      fontFamily: 'Roboto-Medium',
      color: DEFAULT_COLOR.WHITE,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
      letterSpacing: 0.5,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
  });
};
