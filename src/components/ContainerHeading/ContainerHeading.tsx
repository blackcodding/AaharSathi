import {Text, View} from 'react-native';

import {IContainerHeadingProps} from './containerHeading.types';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './ContainerHeading.styles';

export const ContainerHeading = (props: IContainerHeadingProps) => {
  const {title, titleColor, titleSize, subtitle, subTitleSize, onPress} = props;
  const styles = generateStyles({titleColor, titleSize, subTitleSize});
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      {!!subtitle && (
        <TouchableRipple
          borderless={true}
          onPress={onPress}
          style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </TouchableRipple>
      )}
    </View>
  );
};
