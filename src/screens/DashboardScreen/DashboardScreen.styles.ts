import {IDashboardScreenStyleProps} from './DashboardScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IDashboardScreenStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
  });
};
