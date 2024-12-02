import {IBackHeaderProps} from './BackHeader.types';
import React from 'react';
import {Text, View} from 'react-native';
import {generateStyles} from './BackHeader.styles';

const BackHeader = (props: IBackHeaderProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{'Profile Setting'}</Text>
    </View>
  );
};

export default BackHeader;
