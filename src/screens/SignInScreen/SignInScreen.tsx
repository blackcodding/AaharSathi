import {ISignInScreenProps} from './SignInScreen.types';
import React from 'react';
import {Text, TextInput, View} from 'react-native';
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
import {LockIcon} from '../../assets/icons/LockIcon';
import {MailIcon} from '../../assets/icons/MailIcon';

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
        <ContainerHeading
          subtitle={'Welcome to GrocListic'}
          subtitleColor={DEFAULT_COLOR.GRAY_DARK}
          subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_EXTRA_LARGE}
        />
      </View>
      <View style={styles.secondaryContainer}>
        <ContainerHeading
          title={'Login'}
          titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_EXTRA_EXTRA_LARGE}
        />
        <View style={styles.inputContainer}>
          <View style={commonStyles.inputBoxContainer}>
            <View style={commonStyles.inputIcon}>
              <MailIcon />
            </View>
            <TextInput
              style={commonStyles.inputBox}
              placeholder={'Email'}
              keyboardType={'email-address'}
            />
          </View>
          <View style={commonStyles.inputBoxContainer}>
            <View style={commonStyles.inputIcon}>
              <LockIcon />
            </View>
            <TextInput style={commonStyles.inputBox} placeholder={'Password'} />
          </View>
        </View>
        <TouchableRipple
          style={styles.labelContainer}
          borderless={true}
          onPress={onForgotPasswordPress}>
          <Text style={styles.label}>{'Forgot Password?'}</Text>
        </TouchableRipple>
        <DefaultButton
          variant={'primary'}
          text={'Login'}
          extraStyles={{
            width: '100%',
            marginTop: 20,
          }}
          colors={{
            textColor: DEFAULT_COLOR.WHITE,
            borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
            backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
          }}
          onPress={onLoginPress}
        />
      </View>
      <View style={styles.authContainer}>
        <Text
          style={[
            styles.label,
            {
              color: DEFAULT_COLOR.GRAY_DARK,
              fontWeight: 'normal',
            },
          ]}>
          {'New to GrocListic? '}
        </Text>
        <TouchableRipple borderless={true} onPress={onSignUpPress}>
          <Text style={styles.label}>{'Register'}</Text>
        </TouchableRipple>
      </View>
    </View>
  );
};

export default SignInScreen;
