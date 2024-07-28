import {IAddItemCardProps} from './AddItemCard.types';
import {PlusIcon} from '../../../assets/icons/PlusIcon';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './AddItemCard.styles';

export const AddItemCard = (props: IAddItemCardProps) => {
  const {handleAddItemPress} = props;

  const styles = generateStyles();
  return (
    <TouchableRipple
      borderless={true}
      onPress={handleAddItemPress}
      style={styles.mainContainer}>
      <PlusIcon />
    </TouchableRipple>
  );
};
