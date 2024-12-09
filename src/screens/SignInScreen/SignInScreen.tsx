import {ISignInScreenProps} from './SignInScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './SignInScreen.styles';
import {commonStyles} from '../../components/commonStyles';
import LottieView from 'lottie-react-native';

const SignInScreen = (props: ISignInScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <View style={commonStyles.lottieImageContainer}>
        <LottieView
          source={require('../../assets/Lottie/Sign.json')}
          style={commonStyles.lottie}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default SignInScreen;
