import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {StyleSheet} from 'react-native';

export const generateStyles = (props: any) => {
  const {title, titleColor, titleSize, subtitleColor, subTitleSize} =
    props || {};
  return StyleSheet.create({
    titleContainer: {
      paddingVertical: 4,
      flexDirection: 'row',
      justifyContent: !!title ? 'space-between' : undefined,
    },
    title: {
      fontFamily: 'Roboto-Bold',
      fontSize: titleSize || DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      color: titleColor || DEFAULT_COLOR.BLACK,
    },
    subtitleContainer: {
      borderRadius: 12,
    },
    subtitle: {
      paddingHorizontal: !!title ? 8 : 0,
      paddingVertical: 4,
      fontFamily: 'Roboto-Medium',
      fontSize: subTitleSize || DEFAULT_FONT_SIZE.FONT_SIZE_SMALL,
      color: subtitleColor || DEFAULT_COLOR.BLUE_DARK,
    },
  });
};
