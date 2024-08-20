import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {IBannerCardStyleProps} from './BannerCard.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IBannerCardStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginBottom: 50,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: DEFAULT_COLOR.GRAY_LIGHT,
      backgroundColor: DEFAULT_COLOR.WHITE,
      elevation: 2,
      shadowColor: DEFAULT_COLOR.GRAY_MEDIUM,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    gifContainer: {
      width: 28,
      height: 28,
      marginRight: 12,
      borderRadius: 100,
    },
    heading: {
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      fontFamily: 'Roboto-Medium',
      color: DEFAULT_COLOR.BLACK,
    },
  });
};
