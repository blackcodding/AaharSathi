import {IListCardProps} from './ListCard.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './ListCard.styles';

export const ListCard = (props: IListCardProps) => {
  const {} = props;
  const styles = generateStyles();

  return <View style={styles.mainContainer}></View>;
};
