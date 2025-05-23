import {
  DASHBOARD_SCREEN,
  FORGOT_PASSWORD_SCREEN,
  SIGN_UP_SCREEN,
} from '../../utils/screens';
import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {setTokens, setUserId} from '../../utils/storage';

import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {DefaultButton} from '../../components/Buttons/DefaultButton/DefaultButton';
import {ISignInScreenProps} from './SignInScreen.types';
import {LockIcon} from '../../assets/icons/LockIcon';
import {MailIcon} from '../../assets/icons/MailIcon';
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

  const navigation = useNavigation() as any;
  const validate = useValidation();

  const {height, width} = useWindowDimensions();

  const styles = generateStyles({height, width});

  const onSignUpPress = () => {
    navigation.navigate(SIGN_UP_SCREEN as never);
  };

  const onForgotPasswordPress = () => {
    navigation.navigate(FORGOT_PASSWORD_SCREEN as never);
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

      // Get response from api call, convert it to json using .json() and then stored it in data
      // data = { ...Complete API response data }
      const data = await response.json();

      if (response.ok) {
        setTokens({
          accessToken: data.data.accessToken,
          refreshToken: data.data.refreshToken,
        });
        setUserId(data.data.userId);
        navigation.replace(DASHBOARD_SCREEN as never);
      } else {
        //TODO: Something went wrong popup
      }
    } catch (error) {
      //TODO: Log error to error controller
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
          <View style={commonStyles.logoMainContainer}>
            <View style={commonStyles.logContainer}>
              <Image
                source={require('../../assets/Images/GrocListicLogo.png')}
                style={commonStyles.logo}
              />
            </View>
            <Text style={commonStyles.logoTextContainer}>
              <Text style={commonStyles.logoFirstHalf}>{'Groc'}</Text>
              <Text style={commonStyles.logoSecondHalf}>{'Listic'}</Text>
            </Text>
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
                        ? errorType === 'email'
                          ? DEFAULT_COLOR.RED_LIGHT
                          : DEFAULT_COLOR.GREEN_DARK
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
                        ? errorType === 'password'
                          ? DEFAULT_COLOR.RED_LIGHT
                          : DEFAULT_COLOR.GREEN_DARK
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
              isLoading={isLoading}
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
