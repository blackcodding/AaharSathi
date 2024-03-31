import {Text, TouchableOpacity, View} from 'react-native';

import {IContainerHeadingProps} from './containerHeading.types';
import React from 'react';
import {generateStyles} from './ContainerHeading.styles';

export const ContainerHeading = (props: IContainerHeadingProps) => {
  const {title, titleColor, titleSize, subtitle, subTitleSize, onPress} = props;
  const styles = generateStyles({titleColor, titleSize, subTitleSize});
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      {!!subtitle && (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
