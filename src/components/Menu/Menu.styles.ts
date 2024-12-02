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
      maxWidth: '85%',
      backgroundColor: DEFAULT_COLOR.OFF_WHITE,
    },
    Menu: {
      paddingHorizontal: 8,
    },
    menuHeader: {
      marginVertical: 8,
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
    },
    listName: {
      marginBottom: 12,
    },
    feedbackAndHelpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    profileMainContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 12,
    },
    profileContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    personalDetailsContainer: {
      flexDirection: 'column',
      marginLeft: 12,
    },
    iconStyles: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
    },
    name: {
      color: DEFAULT_COLOR.BLACK,
      fontFamily: 'Roboto-Medium',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_MEDIUM,
    },
    phoneNumber: {
      color: DEFAULT_COLOR.BLACK,
      fontFamily: 'Roboto-Regular',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
    },
  });
};
