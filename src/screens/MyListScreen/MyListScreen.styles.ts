import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IMyListScreenStyleProps} from './MyListScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IMyListScreenStyleProps) => {
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
