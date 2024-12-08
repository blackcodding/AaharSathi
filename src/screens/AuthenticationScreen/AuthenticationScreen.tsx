
import {IAuthenticationScreenProps} from './AuthenticationScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './AuthenticationScreen.styles';

const AuthenticationScreen = (props: IAuthenticationScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
    {}
    </View>
  );
};

export default AuthenticationScreen;
