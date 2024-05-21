import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {StyleSheet} from 'react-native';

export const generateStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: DEFAULT_COLOR.TRANSLUCENT_COLOR,
    },
    menuContainer: {
      height: '100%',
      maxWidth: '80%',
      backgroundColor: DEFAULT_COLOR.OFF_WHITE,
    },
    Menu: {
      padding: 10,
    },
    favoriteListContainer: {
      marginVertical: 10,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
    },
    listName: {
      marginBottom: 10,
    },
    feedbackAndHelpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    profileMainContainer: {
      width: '100%',
      height: '20%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    profileContainer: {
      flexDirection: 'column',
    },
    personalDetailsContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 8,
    },
    name: {
      color: DEFAULT_COLOR.BLACK,
      fontFamily: 'Rubik-Regular',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
    },
    phoneNumber: {
      color: DEFAULT_COLOR.BLACK,
      fontFamily: 'Rubik-Regular',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
    },
  });
};
