import {Image, Text, View} from 'react-native';

import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {IDefaultCardProps} from './DefaultCard.types';
import {PlusIcon} from '../../../assets/icons/PlusIcon';
import React from 'react';
import {generateStyles} from './DefaultCard.styles';

export const DefaultCard = (props: IDefaultCardProps) => {
  const {} = props;
  const styles = generateStyles();
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.overlayImage}
        source={{
          uri: 'https://ik.imagekit.io/igcufd11q/Overlays/PurpleOverlay.png?updatedAt=1711225780236',
        }}
      />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Fruits%20Images/apple.png?updatedAt=1711223155762',
          }}
        />
      </View>
      <Text style={styles.itemName} numberOfLines={1}>
        {'Apple'}
      </Text>
      <View style={styles.quantityContainer}>
        <PlusIcon
          width={10}
          height={10}
          fillColor={DEFAULT_COLOR.BLACK}
          strokeColor={DEFAULT_COLOR.BLACK}
        />
        <Text style={styles.quantityText} numberOfLines={1}>
          {'100 gm'}
        </Text>
      </View>
    </View>
  );
};
