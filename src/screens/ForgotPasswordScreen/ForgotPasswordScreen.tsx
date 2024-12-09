import {IForgotPasswordScreenProps} from './ForgotPasswordScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './ForgotPasswordScreen.styles';
import LottieView from 'lottie-react-native';
import {commonStyles} from '../../components/commonStyles';

const ForgotPasswordScreen = (props: IForgotPasswordScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <View style={commonStyles.lottieImageContainer}>
        <LottieView
          source={require('../../assets/Lottie/ForgotPassword.json')}
          style={commonStyles.lottie}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
