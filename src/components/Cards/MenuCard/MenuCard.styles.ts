import {
  DEFAULT_COLOR,
  DEFAULT_FONT_SIZE,
  DEFAULT_SHADOW,
} from '../../../Theme/Theme';

import {IMenuCardStyleProps} from './MenuCard.types';
import {StyleSheet} from 'react-native';

export const generateStyleSheet = (props: IMenuCardStyleProps) => {
  const {shouldFlex = false, nameColor = DEFAULT_COLOR.BLACK} = props;
  return StyleSheet.create({
    mainContainer: {
      flex: shouldFlex ? 1 : undefined,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginHorizontal: shouldFlex ? 2 : 0,
      marginVertical: 4,
      borderRadius: 12,
      borderWidth: 1,
      backgroundColor: DEFAULT_COLOR.WHITE,
      borderColor: DEFAULT_COLOR.GRAY_LIGHT,
      shadowColor: DEFAULT_COLOR.GRAY_MEDIUM,
      ...DEFAULT_SHADOW,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      height: 20,
      width: 20,
      marginRight: 16,
    },
    titleContainer: {
      flex: 1,
      marginRight: 16,
    },
    label: {
      color: DEFAULT_COLOR.GRAY_MEDIUM,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_SMALL,
      fontFamily: 'Roboto-Regular',
    },
    name: {
      color: nameColor,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      fontFamily: 'Roboto-Regular',
    },
  });
};
