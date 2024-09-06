import {IChipProps} from './Chip.types';
import React from 'react';
import {Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './Chip.styles';

const Chip = (props: IChipProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <TouchableRipple
      borderless={true}
      onPress={() => {}}
      style={styles.mainContainer}>
      <Text style={styles.textDecoration}>{'Chip'}</Text>
    </TouchableRipple>
  );
};

export default Chip;
