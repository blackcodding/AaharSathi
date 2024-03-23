import {Image, View} from 'react-native';

import {PlusIcon} from '../../../assets/icons/PlusIcon';
import React from 'react';
import {generateStyles} from './AddItemCard.styles';

export const AddItemCard = () => {
  const styles = generateStyles();
  return (
    <View style={styles.mainContainer}>
      <PlusIcon />
    </View>
  );
};
