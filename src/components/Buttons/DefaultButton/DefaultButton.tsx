import {ActivityIndicator, Text} from 'react-native';

import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {IDefaultButtonProps} from './DefaultButton.types';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './DefaultButton.styles';

export const DefaultButton = (props: IDefaultButtonProps) => {
  const {
    variant = 'secondary',
    text = 'Default',
    extraStyles,
    colors,
    alignSelf,
    disabled = false,
    isLoading = false,
    loaderColor = DEFAULT_COLOR.OFF_WHITE,
    onPress,
  } = props;
  const styles = generateStyles({variant, colors, alignSelf});
  return (
    <TouchableRipple
      borderless={true}
      disabled={disabled}
      style={[styles.container, extraStyles]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator
          size={variant === 'primary' ? 21 : 19}
          color={loaderColor}
          style={styles.text}
        />
      ) : (
        <Text style={styles.text} numberOfLines={1}>
          {text}
        </Text>
      )}
    </TouchableRipple>
  );
};
