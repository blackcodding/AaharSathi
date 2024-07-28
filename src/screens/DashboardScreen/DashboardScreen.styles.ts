import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {IDashboardScreenStyleProps} from './DashboardScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IDashboardScreenStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    plusIconContainer: {
      backgroundColor: DEFAULT_COLOR.OFF_WHITE,
      borderRadius: 100,
      marginBottom: 8,
    },
    label: {
      fontFamily: 'Rubik-Medium',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_SMALL,
    },
  });
};
