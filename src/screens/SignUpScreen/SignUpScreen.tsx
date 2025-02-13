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

import {AtIcon} from '../../assets/icons/AtIcon';
import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {DefaultButton} from '../../components/Buttons/DefaultButton/DefaultButton';
import {ISignUpScreenProps} from './SignUpScreen.types';
import {LockIcon} from '../../assets/icons/LockIcon';
import LottieView from 'lottie-react-native';
import {MailIcon} from '../../assets/icons/MailIcon';
import {SIGN_IN_SCREEN} from '../../utils/screens';
import {TouchableRipple} from 'react-native-paper';
import {UserIcon} from '../../assets/icons/UserIcon';
import {commonStyles} from '../../components/commonStyles';
import {generateStyles} from './SignUpScreen.styles';
import {signUpUserUrl} from '../../API/API';
import {useNavigation} from '@react-navigation/native';
import useValidation from '../../hooks/useValidation';

const SignUpScreen = (props: ISignUpScreenProps) => {
  const {} = props;

  const [focusedField, setFocusedField] = useState<string>('');
  const [username, setUsername] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [errorType, setErrorType] = useState<
    'username' | 'fullName' | 'email' | 'password' | null
  >(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation = useNavigation() as any;

  const validate = useValidation();

  const {height, width} = useWindowDimensions();

  const styles = generateStyles({height, width});

  const onSignInPress = () => {
    navigation.navigate(SIGN_IN_SCREEN as never);
  };

  const onContinuePress = async () => {
    try {
      setIsLoading(true);
      const url = signUpUserUrl();
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          fullName,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data.statusCode === 200) {
        onSignInPress();
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

  const handleUsername = (username: string) => {
    setUsername(username);
    if (validate.isValidUsername(username)) {
      setErrorType(null);
    } else {
      setErrorType('username');
    }
  };

  const handleFullName = (fullName: string) => {
    setFullName(fullName);
    if (validate.isValidFullName(fullName)) {
      setErrorType(null);
    } else {
      setErrorType('fullName');
    }
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
    if (
      errorType !== null ||
      username === '' ||
      fullName === '' ||
      email === '' ||
      password === ''
    ) {
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
          <View style={styles.signUpContainer}>
            <ContainerHeading
              title={'Sign Up'}
              titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_EXTRA_EXTRA_LARGE}
            />

            <View style={commonStyles.inputBoxContainer}>
              <View style={commonStyles.inputIcon}>
                <AtIcon />
              </View>
              <TextInput
                style={[
                  commonStyles.inputBox,
                  {
                    borderBottomColor:
                      focusedField === 'User Name'
                        ? DEFAULT_COLOR.RED_LIGHT
                        : DEFAULT_COLOR.GRAY_LIGHT,
                  },
                ]}
                placeholder={'User Name'}
                onChangeText={text => {
                  handleUsername(text);
                }}
                onFocus={() => onFocus('User Name')}
                onBlur={onBlur}
              />
            </View>
            {errorType === 'username' && (
              <Text style={commonStyles.error}>
                {validate.error.usernameError}
              </Text>
            )}

            <View style={commonStyles.inputBoxContainer}>
              <View style={commonStyles.inputIcon}>
                <UserIcon />
              </View>
              <TextInput
                style={[
                  commonStyles.inputBox,
                  {
                    borderBottomColor:
                      focusedField === 'Full Name'
                        ? DEFAULT_COLOR.RED_LIGHT
                        : DEFAULT_COLOR.GRAY_LIGHT,
                  },
                ]}
                placeholder={'Full Name'}
                onChangeText={text => {
                  handleFullName(text);
                }}
                onFocus={() => onFocus('Full Name')}
                onBlur={onBlur}
              />
            </View>
            {errorType === 'fullName' && (
              <Text style={commonStyles.error}>
                {validate.error.fullNameError}
              </Text>
            )}

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
                onChangeText={text => {
                  handleEmail(text);
                }}
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
                onChangeText={text => {
                  handlePassword(text);
                }}
                onFocus={() => onFocus('Password')}
                onBlur={onBlur}
              />
            </View>
            {errorType === 'password' && (
              <Text style={commonStyles.error}>
                {validate.error.passwordError}
              </Text>
            )}

            <DefaultButton
              variant={'primary'}
              text={'Continue'}
              extraStyles={{
                width: '100%',
                marginTop: 40,
                opacity: disabled() ? 0.6 : 1,
              }}
              colors={{
                textColor: DEFAULT_COLOR.WHITE,
                borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
                backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
              }}
              disabled={disabled()}
              onPress={onContinuePress}
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
                {'Joined us before? '}
              </Text>
              <TouchableRipple borderless={true} onPress={onSignInPress}>
                <Text style={styles.label}>{'Login'}</Text>
              </TouchableRipple>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
