import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {StyleSheet} from 'react-native';

export const generateStyles = (props: any) => {
  const {titleColor, titleSize, subTitleSize} = props || {};
  return StyleSheet.create({
    titleContainer: {
      paddingVertical: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontFamily: 'Rubik-Bold',
      fontSize: titleSize || DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      color: titleColor || DEFAULT_COLOR.BLACK,
    },
    subtitleContainer: {
      borderRadius: 12,
    },
    subtitle: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      fontFamily: 'Rubik-Medium',
      fontSize: subTitleSize || DEFAULT_FONT_SIZE.FONT_SIZE_SMALL,
      color: DEFAULT_COLOR.BLUE_DARK,
    },
  });
};
