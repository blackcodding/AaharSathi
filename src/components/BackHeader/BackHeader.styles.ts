import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {IBackHeaderStyleProps} from './BackHeader.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IBackHeaderStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      marginVertical: 12,
      paddingHorizontal: 8,
      flexDirection: 'row',
    },
    title: {
      fontFamily: 'Roboto-Bold',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      color: DEFAULT_COLOR.BLACK,
      marginLeft: 12,
    },
  });
};
