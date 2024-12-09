import {IAuthenticationScreenProps} from './AuthenticationScreen.types';
import React from 'react';
import {Image, View} from 'react-native';
import {generateStyles} from './AuthenticationScreen.styles';
const AuthenticationScreen = (props: IAuthenticationScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Images/EnterOTP.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default AuthenticationScreen;
