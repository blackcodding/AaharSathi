import {IBackHeaderProps} from './BackHeader.types';
import React from 'react';
import {Text, View} from 'react-native';
import {generateStyles} from './BackHeader.styles';
import {LeftArrowIcon} from '../../assets/icons/LeftArrowIcon';

const BackHeader = (props: IBackHeaderProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <LeftArrowIcon />
      <Text style={styles.title}>{'Profile Setting'}</Text>
    </View>
  );
};

export default BackHeader;
