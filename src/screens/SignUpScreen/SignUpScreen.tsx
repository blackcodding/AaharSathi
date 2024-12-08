
import {ISignUpScreenProps} from './SignUpScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './SignUpScreen.styles';

const SignUpScreen = (props: ISignUpScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
    {}
    </View>
  );
};

export default SignUpScreen;
