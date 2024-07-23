import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IInventoryScreenStyleProps} from './InventoryScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IInventoryScreenStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      height: '100%',
      padding: 12,
      backgroundColor: DEFAULT_COLOR.OFF_WHITE,
    },
    profileContainer: {},
  });
};
