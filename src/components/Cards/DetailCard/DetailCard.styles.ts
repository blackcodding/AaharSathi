import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {StyleSheet} from 'react-native';

export const generateStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      width: 105,
      height: 90,
      backgroundColor: DEFAULT_COLOR.CRIMSON,
      borderWidth: 1.5,
      borderRadius: 12,
      borderColor: DEFAULT_COLOR.BLACK,
      marginTop: 8,
      marginRight: 8,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 2,
    },
    imageContainer: {
      width: 25,
      height: 25,
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
    itemName: {
      fontFamily: 'Rubik-ExtraBold',
      color: DEFAULT_COLOR.WHITE,
      fontSize: 13,
    },
    quantityContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    quantityText: {
      fontFamily: 'Rubik-Bold',
      color: DEFAULT_COLOR.BLACK,
      fontSize: 12,
      marginLeft: 2,
    },
  });
};
