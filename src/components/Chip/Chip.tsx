import {IChipProps} from './Chip.types';
import React from 'react';
import {Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './Chip.styles';

const Chip = (props: IChipProps) => {
  const {chipName, selectedChip, actionType = 'add', onPress} = props;

  const styles = generateStyles({chipName, selectedChip, actionType});

  return (
    <TouchableRipple
      borderless={true}
      onPress={onPress}
      style={styles.mainContainer}>
      <Text style={styles.textDecoration}>{chipName}</Text>
    </TouchableRipple>
  );
};

export default Chip;
