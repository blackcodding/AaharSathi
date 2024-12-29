import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';

import AuthenticationScreen from '../AuthenticationScreen/AuthenticationScreen';
import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
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
import {useNavigation} from '@react-navigation/native';

const SignInScreen = (props: ISignInScreenProps) => {
  const {} = props;

  const [focusedField, setFocusedField] = useState<string>('');

  const navigation = useNavigation();
  const {height, width} = useWindowDimensions();

  const styles = generateStyles({height, width});

  const onSignUpPress = () => {
    navigation.navigate(SignUpScreen as never);
  };

  const onForgotPasswordPress = () => {
    navigation.navigate(ForgotPasswordScreen as never);
  };

  const onLoginPress = () => {
    navigation.navigate(AuthenticationScreen as never);
  };

  const onFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const onBlur = () => {
    setFocusedField('');
  };

  return (
    <KeyboardAvoidingView style={commonStyles.keyboardAvoidingView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.mainContainer}>
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
                onFocus={() => onFocus('Email')}
                onBlur={onBlur}
              />
            </View>
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
                onFocus={() => onFocus('Password')}
                onBlur={onBlur}
              />
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
