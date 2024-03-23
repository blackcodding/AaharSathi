import {DEFAULT_COLOR} from '../../Theme/Theme';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: any) => {
  const {borderColor, showBorder} = props || {};
  return StyleSheet.create({
    imageContainer: {
      height: 50,
      width: 50,
      borderRadius: 50,
      borderWidth: showBorder ? 2 : 0,
      borderColor: borderColor || DEFAULT_COLOR.BLACK,
      marginBottom: 12,
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  });
};
