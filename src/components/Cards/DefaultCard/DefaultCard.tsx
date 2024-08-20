import {Image, Text, View} from 'react-native';

import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {IDefaultCardProps} from './DefaultCard.types';
import {PlusIcon} from '../../../assets/icons/PlusIcon';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './DefaultCard.styles';

export const DefaultCard = (props: IDefaultCardProps) => {
  const {image, name, quantity, onPress} = props;
  const styles = generateStyles();
  return (
    <TouchableRipple
      borderless={true}
      style={styles.mainContainer}
      onPress={onPress}>
      <>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        </View>
        <Text style={styles.itemName} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.quantityContainer}>
          {!!quantity && (
            <PlusIcon
              width={10}
              height={10}
              fillColor={DEFAULT_COLOR.BLACK}
              strokeColor={DEFAULT_COLOR.BLACK}
            />
          )}
          <Text style={styles.quantityText} numberOfLines={1}>
            {quantity}
          </Text>
        </View>
      </>
    </TouchableRipple>
  );
};
