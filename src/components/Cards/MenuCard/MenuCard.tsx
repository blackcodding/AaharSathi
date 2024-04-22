import {Image, Text, View} from 'react-native';

import {IMenuCardProps} from './MenuCard.types';
import React from 'react';
import {generateStyleSheet} from './MenuCard.styles';

export const MenuCard = (props: IMenuCardProps) => {
  const {
    image = 'https://ik.imagekit.io/s1qqeedcv/AaharSathi/plus.png?updatedAt=1711579118614',
    name,
    shouldFlex,
  } = props;
  const styles = generateStyleSheet({shouldFlex});
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.logoImage} src={image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};
