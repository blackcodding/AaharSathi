import {ISignUpScreenProps} from './SignUpScreen.types';
import React from 'react';
import {Text, View} from 'react-native';
import {generateStyles} from './SignUpScreen.styles';
import {commonStyles} from '../../components/commonStyles';
import LottieView from 'lottie-react-native';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import SignInScreen from '../SignInScreen/SignInScreen';

const SignUpScreen = (props: ISignUpScreenProps) => {
  const {} = props;

  const navigation = useNavigation();

  const styles = generateStyles({});

  const onSignInPress = () => {
    navigation.navigate(SignInScreen as never);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={commonStyles.lottieImageContainer}>
        <LottieView
          source={require('../../assets/Lottie/Sign.json')}
          style={commonStyles.lottie}
          autoPlay
          loop
        />
        <TouchableRipple onPress={onSignInPress}>
          <Text>{'Sign In'}</Text>
        </TouchableRipple>
      </View>
    </View>
  );
};

export default SignUpScreen;
