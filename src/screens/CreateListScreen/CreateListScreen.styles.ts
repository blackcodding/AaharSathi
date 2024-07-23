import {DEFAULT_COLOR} from '../../Theme/Theme';
import {ICreateListScreenStyleProps} from './CreateListScreen.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: ICreateListScreenStyleProps) => {
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
