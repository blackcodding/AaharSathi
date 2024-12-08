import {ICircleIndicatorStyleProps} from './CircleIndicator.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: ICircleIndicatorStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {},
    circle: {
      width: 12,
      height: 12,
      borderRadius: 50,
      backgroundColor: 'red',
    },
  });
};
