
import {IHelpScreenProps} from './HelpScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './HelpScreen.styles';

const HelpScreen = (props: IHelpScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
    {}
    </View>
  );
};

export default HelpScreen;
