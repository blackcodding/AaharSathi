import {DEFAULT_COLOR} from '../../Theme/Theme';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: any) => {
  const {borderColor, showBorder} = props || {};
  return StyleSheet.create({
    imageContainer: {
      height: 50,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      borderWidth: showBorder ? 1 : 0,
      borderColor: borderColor || DEFAULT_COLOR.WHITE,
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  });
};
