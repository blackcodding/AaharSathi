
import {IForgotPasswordScreenProps} from './ForgotPasswordScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './ForgotPasswordScreen.styles';

const ForgotPasswordScreen = (props: IForgotPasswordScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
    {}
    </View>
  );
};

export default ForgotPasswordScreen;
