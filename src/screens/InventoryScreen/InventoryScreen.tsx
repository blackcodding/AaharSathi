
import {IInventoryScreenProps} from './InventoryScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './InventoryScreen.styles';

const InventoryScreen = (props: IInventoryScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
    {}
    </View>
  );
};

export default InventoryScreen;
