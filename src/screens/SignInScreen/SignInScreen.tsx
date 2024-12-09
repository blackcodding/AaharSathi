import {ISignInScreenProps} from './SignInScreen.types';
import React from 'react';
import {Text, View} from 'react-native';
import {generateStyles} from './SignInScreen.styles';
import {commonStyles} from '../../components/commonStyles';
import LottieView from 'lottie-react-native';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from '../ForgotPasswordScreen/ForgotPasswordScreen';
import AuthenticationScreen from '../AuthenticationScreen/AuthenticationScreen';
import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {DefaultButton} from '../../components/Buttons/DefaultButton/DefaultButton';

const SignInScreen = (props: ISignInScreenProps) => {
  const {} = props;

  const navigation = useNavigation();

  const styles = generateStyles({});

  const onSignUpPress = () => {
    navigation.navigate(SignUpScreen as never);
  };

  const onForgotPasswordPress = () => {
    navigation.navigate(ForgotPasswordScreen as never);
  };

  const onLoginPress = () => {
    navigation.navigate(AuthenticationScreen as never);
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
        <Text style={styles.heading}>{'Welcome to GrocListic'}</Text>
      </View>
      <View style={styles.secondaryContainer}>
        <ContainerHeading
          title={'Login'}
          titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_EXTRA_EXTRA_LARGE}
        />
        <View style={styles.inputContainer}></View>
        <View style={styles.labelContainer}></View>
        <DefaultButton
          variant={'primary'}
          text={'Login'}
          extraStyles={{
            width: '100%',
            marginTop: 16,
          }}
          colors={{
            textColor: DEFAULT_COLOR.WHITE,
            borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
            backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
          }}
        />
        <View style={styles.authContainer}></View>
      </View>
    </View>
  );
};

export default SignInScreen;
