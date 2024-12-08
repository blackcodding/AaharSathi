import {Image, Text, View} from 'react-native';

import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {IDetailCardProps} from './DetailCard.types';
import {PlusIcon} from '../../../assets/icons/PlusIcon';
import React from 'react';
import {Tag} from '../../Tags/Tag';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './DetailCard.styles';
import CircleIndicator from '../../CircleIndicator/CircleIndicator';

export const DetailCard = (props: IDetailCardProps) => {
  const {tagDetail, image, name, quantity, onPress} = props;
  const styles = generateStyles();
  return (
    <TouchableRipple
      borderless={true}
      style={styles.mainContainer}
      onPress={onPress}>
      <>
        <View style={styles.headerContainer}>
          <CircleIndicator />
          <Tag
            text={tagDetail}
            color={DEFAULT_COLOR.RED_DARK}
            backgroundColor={DEFAULT_COLOR.CRIMSON}
            borderColor={DEFAULT_COLOR.RED_LIGHT}
          />
        </View>

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
          <PlusIcon
            width={10}
            height={10}
            fillColor={DEFAULT_COLOR.BLACK}
            strokeColor={DEFAULT_COLOR.BLACK}
          />
          <Text style={styles.quantityText} numberOfLines={1}>
            {quantity}
          </Text>
        </View>
      </>
    </TouchableRipple>
  );
};
