import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {StyleSheet} from 'react-native';

export const generateStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      width: '22%',
      height: 75,
      backgroundColor: DEFAULT_COLOR.PURPLE_MEDIUM,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: DEFAULT_COLOR.BLACK,
      marginTop: 8,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 2,
    },
    overlayImage: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '40%',
      objectFit: 'fill',
      borderRadius: 12,
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
      fontFamily: 'Rubik-Bold',
      color: DEFAULT_COLOR.WHITE,
      fontSize: 11,
    },
    quantityContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    quantityText: {
      fontFamily: 'Rubik-Medium',
      color: DEFAULT_COLOR.BLACK,
      fontSize: 10,
      marginLeft: 2,
    },
  });
};
