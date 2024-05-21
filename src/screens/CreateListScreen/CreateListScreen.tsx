
import {ICreateListScreenProps} from './CreateListScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './CreateListScreen.styles';

const CreateListScreen = (props: ICreateListScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
    {}
    </View>
  );
};

export default CreateListScreen;
