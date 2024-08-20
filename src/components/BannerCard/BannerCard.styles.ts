import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
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
      marginRight: 4,
      borderRadius: 100,
    },
    gif: {
      width: '100%',
      height: '100%',
    },
    heading: {
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
      fontFamily: 'Roboto-Regular',
      color: DEFAULT_COLOR.BLACK,
    },
  });
};
