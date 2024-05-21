import {Image, Text} from 'react-native';

import {IMenuCardProps} from './MenuCard.types';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyleSheet} from './MenuCard.styles';

export const MenuCard = (props: IMenuCardProps) => {
  const {
    image = 'https://ik.imagekit.io/s1qqeedcv/AaharSathi/plus.png?updatedAt=1711579118614',
    name,
    shouldFlex,
    handleMenuCardClick,
  } = props;
  const styles = generateStyleSheet({shouldFlex});
  return (
    <TouchableRipple onPress={handleMenuCardClick} style={styles.mainContainer}>
      <>
        <Image style={styles.logoImage} src={image} />
        <Text style={styles.name}>{name}</Text>
      </>
    </TouchableRipple>
  );
};
