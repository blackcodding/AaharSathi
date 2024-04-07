import {Text, View} from 'react-native';

import React from 'react';
import {generateStyles} from './PopUp.styles';

export const PopUp = () => {
  const styles = generateStyles();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.popUpContainer}>
        <Text style={styles.text}>{'Heading'}</Text>
        <Text style={styles.subText}>
          {
            'Dummy Text Dummy Text Dummy Text Dummy Text Dummy TextDummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text'
          }
        </Text>
      </View>
    </View>
  );
};
