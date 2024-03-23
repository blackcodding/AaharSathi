import {AddItemCard} from '../Cards/AddItemCard/AddItemCard';
import {DefaultCard} from '../Cards/DefaultCard/DefaultCard';
import {IToBuyProps} from './ToBuy.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './ToBuy.styles';

export const ToBuy = (props: IToBuyProps) => {
  const {} = props;
  const styles = generateStyles();
  return (
    <View style={styles.mainContainer}>
      <DefaultCard />
      <DefaultCard />
      <DefaultCard />
      <DefaultCard />
      <DefaultCard />
      <DefaultCard />
      <DefaultCard />
      <DefaultCard />
      <DefaultCard />
      <DefaultCard />
      <DefaultCard />
      <AddItemCard />
    </View>
  );
};
