import {IDefaultButtonProps} from './DefaultButton.types';
import React from 'react';
import {Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './DefaultButton.styles';

export const DefaultButton = (props: IDefaultButtonProps) => {
  const {
    variant = 'secondary',
    text = 'Default',
    extraStyles,
    colors,
    alignSelf,
    onPress,
  } = props;
  const styles = generateStyles({variant, colors, alignSelf});
  return (
    <TouchableRipple
      borderless={true}
      style={[styles.container, extraStyles]}
      onPress={onPress}>
      <Text style={styles.text} numberOfLines={1}>
        {text}
      </Text>
    </TouchableRipple>
  );
};
