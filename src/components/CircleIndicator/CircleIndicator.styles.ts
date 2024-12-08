import {DEFAULT_COLOR} from '../../Theme/Theme';
import {ICircleIndicatorStyleProps} from './CircleIndicator.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: ICircleIndicatorStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {},
    circle: {
      width: 10,
      height: 10,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: DEFAULT_COLOR.RED_LIGHT,
      backgroundColor: DEFAULT_COLOR.CRIMSON,
    },
  });
};
