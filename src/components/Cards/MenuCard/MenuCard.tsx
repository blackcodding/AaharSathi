import {Image, Text, View} from 'react-native';

import {IMenuCardProps} from './MenuCard.types';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyleSheet} from './MenuCard.styles';
import {DefaultButton} from '../../Buttons/DefaultButton/DefaultButton';

export const MenuCard = (props: IMenuCardProps) => {
  const {image, icon, name, shouldFlex, handleMenuCardPress, onButtonPress} =
    props;
  const styles = generateStyleSheet({shouldFlex});
  return (
    <TouchableRipple
      borderless={true}
      onPress={handleMenuCardPress}
      style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          {!!image && <Image style={styles.logoImage} src={image} />}
          {!!icon && icon}
          <View style={styles.titleContainer}>
            <Text style={styles.subName}>{name}</Text>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
        <View>
          <DefaultButton text={'Update'} onPress={onButtonPress} />
        </View>
      </View>
    </TouchableRipple>
  );
};
