import {Image, Text, View} from 'react-native';

import {IMenuCardProps} from './MenuCard.types';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyleSheet} from './MenuCard.styles';

export const MenuCard = (props: IMenuCardProps) => {
  const {image, icon, name, shouldFlex, handleMenuCardClick} = props;
  const styles = generateStyleSheet({shouldFlex});
  return (
    <TouchableRipple
      borderless={true}
      onPress={handleMenuCardClick}
      style={styles.mainContainer}>
      <View style={styles.container}>
        {!!image && <Image style={styles.logoImage} src={image} />}
        {!!icon && icon}
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableRipple>
  );
};
