import {IChipContainerStyleProps} from './ChipContainer.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IChipContainerStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      paddingVertical: 4,
    },
  });
};
