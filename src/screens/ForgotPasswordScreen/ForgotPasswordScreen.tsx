import {
  ActivityIndicator,
  Image,
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
import {DefaultButton} from '../../components/Buttons/DefaultButton/DefaultButton';
import {IForgotPasswordScreenProps} from './ForgotPasswordScreen.types';
import {MailIcon} from '../../assets/icons/MailIcon';
import {SIGN_IN_SCREEN} from '../../utils/screens';
import {TouchableRipple} from 'react-native-paper';
import {commonStyles} from '../../components/commonStyles';
import {forgotPasswordUrl} from '../../API/API';
import {generateStyles} from './ForgotPasswordScreen.styles';
import {useNavigation} from '@react-navigation/native';
import useValidation from '../../hooks/useValidation';

const ForgotPasswordScreen = (props: IForgotPasswordScreenProps) => {
  const {} = props;

  const [focusedField, setFocusedField] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation = useNavigation() as any;
  const validate = useValidation();

  const {height, width} = useWindowDimensions();

  const styles = generateStyles({height, width});

  const onSignInPress = () => {
    navigation.navigate(SIGN_IN_SCREEN as never);
  };

  const onSubmitPress = async () => {
    try {
      setIsLoading(true);
      const url = forgotPasswordUrl();
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
      });

      const data = await response.json();
      if (response.ok) {
        onSignInPress();
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
      setIsError(false);
    } else {
      setIsError(true);
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
            <Image
              source={require('../../assets/Images/ForgotPassword.png')}
              style={commonStyles.lottieImage}
            />
          </View>
          <View style={styles.forgotPasswordContainer}>
            <ContainerHeading
              title={'Forgot Password?'}
              titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_EXTRA_EXTRA_LARGE}
            />
            <ContainerHeading
              subtitle={`Don't worry! It happens. Please enter the address associated with your account.`}
              subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR}
              subtitleColor={DEFAULT_COLOR.GRAY_DARK}
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
                        ? isError
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
            {isError === true && (
              <Text style={commonStyles.error}>
                {validate.error.emailError}
              </Text>
            )}
            <DefaultButton
              variant={'primary'}
              text={'Submit'}
              extraStyles={{
                width: '100%',
                marginTop: 40,
                opacity: isError === true || email === '' ? 0.6 : 1,
              }}
              colors={{
                textColor: DEFAULT_COLOR.WHITE,
                borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
                backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
              }}
              disabled={isError === true || email === ''}
              onPress={onSubmitPress}
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
                {'Remembered your Password? '}
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

export default ForgotPasswordScreen;
