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
      backgroundColor: DEFAULT_COLOR.OFF_WHITE,
    },
    itemContainer: {
      width: width - 18 * 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      marginTop: 12,
    },
    image: {
      width: 300,
      height: 300,
      objectFit: 'contain',
    },
    text: {
      width: 320,
      marginTop: 16,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
      color: DEFAULT_COLOR.BLACK,
      textAlign: 'center',
      fontFamily: 'Roboto-Medium',
    },
    subtext: {
      width: 320,
      marginTop: 16,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
      color: DEFAULT_COLOR.BLACK,
      textAlign: 'center',
      fontFamily: 'Roboto-Regular',
    },
    footer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBottom: 28,
    },
    bulletContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 30,
      marginHorizontal: 112,
      padding: 20,
    },
    bullet: {
      height: 10,
      width: 10,
      borderRadius: 50,
      borderWidth: 1.25,
      borderColor: DEFAULT_COLOR.GRAY_MEDIUM,
      backgroundColor: DEFAULT_COLOR.WHITE,
    },
    activeBullet: {
      backgroundColor: DEFAULT_COLOR.GRAY_MEDIUM,
    },
    emptyView: {
      height: 32,
    },
  });
};
