import {
  DEFAULT_COLOR,
  DEFAULT_FONT_SIZE,
  DEFAULT_SHADOW,
} from '../../../Theme/Theme';

import {IAlertCardStyleProps} from './AlertCard.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: IAlertCardStyleProps) => {
  const {
    titleSize = DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR,
    descriptionSize = DEFAULT_FONT_SIZE.FONT_SIZE_SMALL,
  } = props || {};

  return StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginVertical: 8,
      borderRadius: 12,
      borderWidth: 1,
      backgroundColor: DEFAULT_COLOR.ALERT_LIGHT,
      borderColor: DEFAULT_COLOR.ALERT_MEDIUM,
      shadowColor: DEFAULT_COLOR.ALERT_MEDIUM,
      ...DEFAULT_SHADOW,
    },
    infoContainer: {
      flex: 1,
      marginHorizontal: 12,
    },
    title: {
      fontFamily: 'Roboto-Medium',
      fontSize: titleSize,
      color: DEFAULT_COLOR.BLACK,
    },
    description: {
      fontFamily: 'Roboto-Regular',
      fontSize: descriptionSize,
      color: DEFAULT_COLOR.BLACK,
    },
    buttonContainer: {},
  });
};
