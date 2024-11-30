
import {IAlertCardProps} from './AlertCard.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './AlertCard.styles';

const AlertCard = (props: IAlertCardProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
    {}
    </View>
  );
};

export default AlertCard;
