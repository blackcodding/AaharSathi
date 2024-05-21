import {IAddItemCardProps} from './AddItemCard.types';
import {PlusIcon} from '../../../assets/icons/PlusIcon';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {generateStyles} from './AddItemCard.styles';

export const AddItemCard = (props: IAddItemCardProps) => {
  const {handleAddItemPress} = props;

  const styles = generateStyles();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleAddItemPress}
      style={styles.mainContainer}>
      <PlusIcon />
    </TouchableOpacity>
  );
};
