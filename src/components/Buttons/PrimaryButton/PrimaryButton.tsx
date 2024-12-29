import {Text, View} from 'react-native';

import {IPrimaryButtonProps} from './PrimaryButton.types';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './PrimaryButton.styles';

const PrimaryButton = (props: IPrimaryButtonProps) => {
  const {label = ''} = props;

  const styles = generateStyles({});

  return (
    <TouchableRipple
      borderless={true}
      onPress={() => {}}
      style={styles.mainContainer}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableRipple>
  );
};

export default PrimaryButton;
