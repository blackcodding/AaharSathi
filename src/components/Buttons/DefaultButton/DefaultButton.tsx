import {IDefaultButtonProps} from './DefaultButton.types';
import React from 'react';
import {Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './DefaultButton.styles';

export const DefaultButton = (props: IDefaultButtonProps) => {
  const {text = 'Default', colors, alignSelf, onPress} = props;
  const styles = generateStyles({colors, alignSelf});
  return (
    <TouchableRipple
      borderless={true}
      style={styles.container}
      onPress={onPress}>
      <Text style={styles.text} numberOfLines={1}>
        {text}
      </Text>
    </TouchableRipple>
  );
};
