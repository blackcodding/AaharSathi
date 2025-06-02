import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {StyleSheet} from 'react-native';

interface IDropDownStyleProps {
  menuVisible: boolean;
  actionType: string;
}

export const generateStyles = (props: IDropDownStyleProps) => {
  const {menuVisible = false, actionType} = props;

  return StyleSheet.create({
    mainContainer: {
      width: 60,
      marginHorizontal: 4,
      flexDirection: 'row',
      alignContent: 'center',
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderWidth: 1,
      borderColor: DEFAULT_COLOR.GRAY_LIGHT,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomLeftRadius: menuVisible ? 0 : 8,
      borderBottomRightRadius: menuVisible ? 0 : 8,
      backgroundColor:
        actionType === 'delete'
          ? DEFAULT_COLOR.GRAY_LIGHT
          : DEFAULT_COLOR.WHITE,
    },
    text: {
      width: '60%',
      fontFamily: 'Roboto-Regular ',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
      color:
        actionType === 'delete'
          ? DEFAULT_COLOR.GRAY_MEDIUM
          : DEFAULT_COLOR.BLACK,
    },
    iconContainer: {
      borderRadius: 100,
      marginHorizontal: 2,
      transform: [{rotate: menuVisible ? '90deg' : '0deg'}],
    },
    menu: {
      position: 'absolute',
      width: 60,
      top: 28,
      paddingHorizontal: 8,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      paddingBottom: 4,
      borderColor: DEFAULT_COLOR.GRAY_LIGHT,
      backgroundColor: DEFAULT_COLOR.WHITE,
      flexDirection: 'column',
      zIndex: 1,
    },
    menuText: {
      fontFamily: 'Roboto-Regular ',
      fontSize: DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
      color: DEFAULT_COLOR.GRAY_MEDIUM,
    },
  });
};
