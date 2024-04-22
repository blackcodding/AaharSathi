import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../../Theme/Theme';

import {IMenuCardStyleProps} from './MenuCard.types';
import {StyleSheet} from 'react-native';

export const generateStyleSheet = (props: IMenuCardStyleProps) => {
  const {shouldFlex = false} = props;
  return StyleSheet.create({
    mainContainer: {
      flex: shouldFlex ? 1 : undefined,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 8,
      marginHorizontal: shouldFlex ? 2 : 0,
      marginVertical: 4,
      borderRadius: 12,
      borderWidth: 1.25,
      borderColor: DEFAULT_COLOR.BLACK,
    },
    logoImage: {
      height: 20,
      width: 20,
      marginRight: 12,
    },
    name: {
      color: DEFAULT_COLOR.BLACK,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      fontFamily: 'Rubik-Regular',
    },
  });
};
