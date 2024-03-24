import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {StyleSheet} from 'react-native';

export const generateStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      width: 250,
      height: 100,
      backgroundColor: DEFAULT_COLOR.WHITE,
      borderWidth: 1.5,
      borderRadius: 12,
      borderColor: DEFAULT_COLOR.BLACK,
      marginTop: 8,
      marginRight: 8,
      padding: 10,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    upComingListNameContainer: {
      flexDirection: 'row',
    },
    upComingListName: {
      fontFamily: 'Rubik-Bold',
      color: DEFAULT_COLOR.BLACK,
      marginRight: 8,
    },
    threeDotsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    bullet: {
      width: 6,
      height: 6,
      borderRadius: 50,
      backgroundColor: DEFAULT_COLOR.BLACK,
      marginRight: 2,
    },
  });
};
