
import {ISignInScreenProps} from './SignInScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './SignInScreen.styles';

const SignInScreen = (props: ISignInScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
    {}
    </View>
  );
};

export default SignInScreen;
