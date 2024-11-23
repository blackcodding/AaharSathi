import {AddItemCard} from '../Cards/AddItemCard/AddItemCard';
import {DefaultCard} from '../Cards/DefaultCard/DefaultCard';
import {IToBuyProps} from './ToBuy.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './ToBuy.styles';

export const ToBuy = (props: IToBuyProps) => {
  const {data, handleItemPress, handleAddItemPress} = props;
  const styles = generateStyles();

  return (
    <View style={styles.mainContainer}>
      {!!data &&
        data.length > 0 &&
        data.map(data => {
          return (
            <DefaultCard
              key={data.id}
              image={data.image}
              name={data.name}
              quantity={data.quantity}
              onPress={() => {
                handleItemPress();
              }}
            />
          );
        })}
      <AddItemCard handleAddItemPress={handleAddItemPress} />
    </View>
  );
};
