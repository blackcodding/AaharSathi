import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import React, {useState} from 'react';

import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import DashboardScreen from '../DashboardScreen/DashboardScreen';
import {DefaultButton} from '../../components/Buttons/DefaultButton/DefaultButton';
import ForgotPasswordScreen from '../ForgotPasswordScreen/ForgotPasswordScreen';
import {ISignInScreenProps} from './SignInScreen.types';
import {LockIcon} from '../../assets/icons/LockIcon';
import LottieView from 'lottie-react-native';
import {MailIcon} from '../../assets/icons/MailIcon';
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import {TouchableRipple} from 'react-native-paper';
import {commonStyles} from '../../components/commonStyles';
import {generateStyles} from './SignInScreen.styles';
import {signInUserUrl} from '../../API/API';
import {useNavigation} from '@react-navigation/native';
import useValidation from '../../hooks/useValidation';

const SignInScreen = (props: ISignInScreenProps) => {
  const {} = props;

  const [focusedField, setFocusedField] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorType, setErrorType] = useState<'email' | 'password' | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation = useNavigation();
  const validate = useValidation();

  const {height, width} = useWindowDimensions();

  const styles = generateStyles({height, width});

  const onSignUpPress = () => {
    navigation.navigate(SignUpScreen as never);
  };

  const onForgotPasswordPress = () => {
    navigation.navigate(ForgotPasswordScreen as never);
  };

  const onLoginPress = async () => {
    try {
      setIsLoading(true);
      const url = signInUserUrl();
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data.statusCode === 200) {
        navigation.navigate(DashboardScreen as never);
      } else {
        //TODO: Something went wrong popup
      }
    } catch (error) {
      console.log('Error --->', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const onBlur = () => {
    setFocusedField('');
  };

  const handleEmail = (email: string) => {
    setEmail(email);
    if (validate.isValidEmail(email)) {
      setErrorType(null);
    } else {
      setErrorType('email');
    }
  };

  const handlePassword = (password: string) => {
    setPassword(password);
    if (validate.isValidPassword(password)) {
      setErrorType(null);
    } else {
      setErrorType('password');
    }
  };

  const disabled = () => {
    if (errorType !== null || email === '' || password === '') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <KeyboardAvoidingView style={commonStyles.keyboardAvoidingView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.mainContainer}>
          {isLoading && (
            <View style={commonStyles.loaderContainer}>
              <ActivityIndicator size={60} color={DEFAULT_COLOR.OFF_WHITE} />
            </View>
          )}
          <View style={commonStyles.lottieContainer}>
            <LottieView
              source={require('../../assets/Lottie/Sign.json')}
              style={commonStyles.lottie}
              autoPlay
              loop
            />
          </View>
          <View style={styles.loginContainer}>
            <ContainerHeading
              title={'Login'}
              titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_EXTRA_EXTRA_LARGE}
            />
            <View style={commonStyles.inputBoxContainer}>
              <View style={commonStyles.inputIcon}>
                <MailIcon />
              </View>
              <TextInput
                style={[
                  commonStyles.inputBox,
                  {
                    borderBottomColor:
                      focusedField === 'Email'
                        ? DEFAULT_COLOR.RED_LIGHT
                        : DEFAULT_COLOR.GRAY_LIGHT,
                  },
                ]}
                placeholder={'Email'}
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                onChangeText={text => handleEmail(text)}
                onFocus={() => onFocus('Email')}
                onBlur={onBlur}
              />
            </View>
            {errorType === 'email' && (
              <Text style={commonStyles.error}>
                {validate.error.emailError}
              </Text>
            )}
            <View style={commonStyles.inputBoxContainer}>
              <View style={commonStyles.inputIcon}>
                <LockIcon />
              </View>
              <TextInput
                style={[
                  commonStyles.inputBox,
                  {
                    borderBottomColor:
                      focusedField === 'Password'
                        ? DEFAULT_COLOR.RED_LIGHT
                        : DEFAULT_COLOR.GRAY_LIGHT,
                  },
                ]}
                placeholder={'Password'}
                onChangeText={text => handlePassword(text)}
                onFocus={() => onFocus('Password')}
                onBlur={onBlur}
              />
            </View>
            {errorType === 'password' && (
              <Text style={commonStyles.error}>
                {validate.error.passwordError}
              </Text>
            )}
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
                opacity: disabled() ? 0.6 : 1,
              }}
              colors={{
                textColor: DEFAULT_COLOR.WHITE,
                borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
                backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
              }}
              disabled={disabled()}
              onPress={onLoginPress}
            />
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
