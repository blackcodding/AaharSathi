import {Image, Text, View} from 'react-native';

import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {IDetailCardProps} from './DetailCard.types';
import {PlusIcon} from '../../../assets/icons/PlusIcon';
import React from 'react';
import {Tag} from '../../Tags/Tag';
import {generateStyles} from './DetailCard.styles';

export const DetailCard = (props: IDetailCardProps) => {
  const {tagDetail, image, name, quantity} = props;
  const styles = generateStyles();
  return (
    <View style={styles.mainContainer}>
      <Tag
        text={tagDetail}
        isAbsolute={true}
        top={2}
        right={2}
        backgroundColor={DEFAULT_COLOR.RED_MEDIUM}
      />
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
    </View>
  );
};
