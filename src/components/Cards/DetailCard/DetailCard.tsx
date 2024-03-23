import {IDetailCardProps} from './DetailCard.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './DetailCard.styles';

export const DetailCard = (props: IDetailCardProps) => {
  const {} = props;
  const styles = generateStyles();
  return <View style={styles.mainContainer}></View>;
};
