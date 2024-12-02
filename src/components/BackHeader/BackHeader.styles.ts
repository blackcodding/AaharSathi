import { DEFAULT_COLOR, DEFAULT_FONT_SIZE } from '../../Theme/Theme';
import {IBackHeaderStyleProps} from './BackHeader.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IBackHeaderStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      padding: 8,
    },
    title: {
      fontFamily: 'Roboto-Bold',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      color: DEFAULT_COLOR.BLACK,
    },
  });
};
