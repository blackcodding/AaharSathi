import {Text, View} from 'react-native';

import {IItemDetailModelProps} from './ItemDetailModel.types';
import React from 'react';
import {generateStyles} from './ItemDetailModel.styles';

const ItemDetailModel = (props: IItemDetailModelProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View>
      <View style={styles.itemContainer}>
        <Text style={styles.textStyle}>{'Name'}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.textStyle}>{'Quantity'}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.textStyle}>{'Category'}</Text>
      </View>
    </View>
  );
};

export default ItemDetailModel;
