import {Image, Text, View} from 'react-native';

import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {IDetailCardProps} from './DetailCard.types';
import {PlusIcon} from '../../../assets/icons/PlusIcon';
import React from 'react';
import {Tag} from '../../Tags/Tag';
import {generateStyles} from './DetailCard.styles';

export const DetailCard = (props: IDetailCardProps) => {
  const {} = props;
  const styles = generateStyles();
  return (
    <View style={styles.mainContainer}>
      <Tag text={'30 Mar'} isAbsolute={true} top={2} right={2} />
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
