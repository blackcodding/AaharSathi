import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const generateStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      padding: 18,
      backgroundColor: DEFAULT_COLOR.WHITE,
    },
    itemContainer: {
      width: width - 18 * 2,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    imageContainer: {
      marginTop: 30,
    },
    image: {
      width: 300,
      height: 300,
      objectFit: 'contain',
    },
    text: {
      width: 320,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      color: DEFAULT_COLOR.BLACK,
      textAlign: 'center',
      fontFamily: 'Rubik-Medium',
    },
    subtext: {
      width: 320,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
      color: DEFAULT_COLOR.BLACK,
      textAlign: 'center',
      marginTop: 4,
      fontFamily: 'Rubik-Regular',
    },
    footer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBottom: 10,
    },
    bulletContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 30,
      marginHorizontal: 120,
      padding: 20,
    },
    bullet: {
      height: 12,
      width: 12,
      borderRadius: 50,
      borderWidth: 1.5,
      backgroundColor: DEFAULT_COLOR.WHITE,
    },
    activeBullet: {
      backgroundColor: DEFAULT_COLOR.BLACK,
    },
    emptyView: {
      height: 38,
    },
  });
};
