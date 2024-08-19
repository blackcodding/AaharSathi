import {AddItemCard} from '../Cards/AddItemCard/AddItemCard';
import {DefaultCard} from '../Cards/DefaultCard/DefaultCard';
import {IToBuyProps} from './ToBuy.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './ToBuy.styles';

export const ToBuy = (props: IToBuyProps) => {
  const {data, handleAddItemPress, setOpenToBuyBTS} = props;
  const styles = generateStyles();

  const handelDefaultCardPress = (data: any) => {
    setOpenToBuyBTS(true);
  };

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
                handelDefaultCardPress(data);
              }}
            />
          );
        })}
      <AddItemCard handleAddItemPress={handleAddItemPress} />
    </View>
  );
};
