import {PlusIcon} from '../../../assets/icons/PlusIcon';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {generateStyles} from './AddItemCard.styles';

export const AddItemCard = () => {
  const styles = generateStyles();
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.mainContainer}>
      <PlusIcon />
    </TouchableOpacity>
  );
};
