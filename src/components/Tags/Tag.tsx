import {Text, View} from 'react-native';

import {ITagProps} from './Tag.types';
import React from 'react';
import {generateStyles} from './Tag.styles';

export const Tag = (props: ITagProps) => {
  const {
    text,
    isAbsolute = false,
    color,
    backgroundColor,
    top,
    right,
    bottom,
    left,
  } = props;
  const styles = generateStyles({
    isAbsolute,
    color,
    backgroundColor,
    top,
    right,
    bottom,
    left,
  });
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.quantityText}>{text}</Text>
    </View>
  );
};
