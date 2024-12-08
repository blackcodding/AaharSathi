
import {ICircleIndicatorProps} from './CircleIndicator.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './CircleIndicator.styles';

const CircleIndicator = (props: ICircleIndicatorProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <View style={styles.circle}></View>
    </View>
  );
};

export default CircleIndicator;
