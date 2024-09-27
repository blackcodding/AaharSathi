import {IPrimaryButtonProps} from './PrimaryButton.types';
import React from 'react';
import {Text, View} from 'react-native';
import {generateStyles} from './PrimaryButton.styles';
import {TouchableRipple} from 'react-native-paper';

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
