import {ISignUpScreenProps} from './SignUpScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './SignUpScreen.styles';
import {commonStyles} from '../../components/commonStyles';
import LottieView from 'lottie-react-native';

const SignUpScreen = (props: ISignUpScreenProps) => {
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

export default SignUpScreen;
