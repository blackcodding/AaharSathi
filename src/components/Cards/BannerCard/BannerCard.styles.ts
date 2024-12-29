import {
  DEFAULT_COLOR,
  DEFAULT_FONT_SIZE,
  DEFAULT_SHADOW,
} from '../../../Theme/Theme';

import {IBannerCardStyleProps} from './BannerCard.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IBannerCardStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 4,
      paddingVertical: 2,
      marginBottom: 24,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: DEFAULT_COLOR.GRAY_LIGHT,
      backgroundColor: DEFAULT_COLOR.WHITE,
      shadowColor: DEFAULT_COLOR.GRAY_MEDIUM,
      ...DEFAULT_SHADOW,
    },
    heading: {
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
      fontFamily: 'Roboto-Regular',
      color: DEFAULT_COLOR.BLACK,
    },
  });
};
