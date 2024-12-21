import {Text, View} from 'react-native';

import {IContainerHeadingProps} from './containerHeading.types';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './ContainerHeading.styles';

export const ContainerHeading = (props: IContainerHeadingProps) => {
  const {
    title,
    titleColor,
    titleSize,
    subtitle,
    subtitleColor,
    subTitleSize,
    onPress,
  } = props;
  const styles = generateStyles({
    title,
    titleColor,
    titleSize,
    subtitleColor,
    subTitleSize,
  });
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      {!!subtitle && onPress && (
        <TouchableRipple
          borderless={true}
          onPress={onPress}
          style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </TouchableRipple>
      )}
      {!!subtitle && !onPress && (
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      )}
    </View>
  );
};
