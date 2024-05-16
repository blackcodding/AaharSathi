
import {IMyListScreenProps} from './MyListScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './MyListScreen.styles';

const MyListScreen = (props: IMyListScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
    {}
    </View>
  );
};

export default MyListScreen;
