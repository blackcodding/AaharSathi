import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IChipStyleProps} from './Chip.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IChipStyleProps) => {
  const {} = props || {};

  return StyleSheet.create({
    mainContainer: {
      alignItems: 'center',
      alignSelf: 'flex-start',
      borderRadius: 50,
      borderWidth: 1,
      marginRight: 4,
      borderColor: DEFAULT_COLOR.GRAY_LIGHT,
      backgroundColor: DEFAULT_COLOR.WHITE,
      elevation: 2,
      shadowColor: DEFAULT_COLOR.GRAY_MEDIUM,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    textDecoration: {
      paddingHorizontal: 12,
      paddingVertical: 4,
    },
  });
};
